const router = require("express").Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userModel = require("../models/user.model");

// Registrar o usuário no Sistema
router.post("/cadastro", async (req, res) => {
  //req.body

  // {user: "dmthysgo", email: "thyago.ezequiel.de.melo@gmail.com", senha: 12345678}
  const { user, email, senha } = req.body;

  const emailExiste = await userModel.findOne({
    email: email,
  });

  if (emailExiste) {
    return res.status(422).json({
      msg: "Email já está cadastrado! Tente outro email, ou faça Login!",
    });
  }

  const userExiste = await userModel.findOne({
    user: user,
  });

  if (userExiste) {
    return res.status(422).json({
      msg: "Usuário já está cadastrado! Tente outro nome de usuário!",
    });
  }

  const salt = await bcrypt.genSalt(10);
  const senhaHash = await bcrypt.hash(senha, salt);

  const usuario = new userModel({
    user,
    email,
    senha: senhaHash,
  });

  try {
    await usuario.save();
    res.status(201).json({
      msg: "Usuário criado no sistema com sucesso!",
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});

// Logar o usuário no Sistema
router.post("/login", async (req, res) => {
  const { user, senha } = req.body;
  // Validações
  if (!user) {
    return res.status(422).json({ msg: "Usuário obrigatório!" });
  }
  if (!senha) {
    return res.status(422).json({ msg: "Senha obrigatória!" });
  }

  // Checar se usuario existe
  const usuario = await userModel.findOne({
    user: user,
  });
  if (!usuario) {
    return res.status(404).json({ msg: "Usuário não encontrado" });
  }
  // Checar se senha é compativel
  const valida_Senha = await bcrypt.compare(senha, usuario.senha);
  if (!valida_Senha) {
    return res.status(422).json({ msg: "Senha inválida" });
  }

  try {
    const Segredo = process.env.SEGREDO;
    const token = jwt.sign(
      {
        user: user.user,
      },
      Segredo
    );

    res.status(200).json({
      msg: "Login realizado com sucesso!",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      msg: "Aconteceu um erro no servidor, tente novamente mais tarde",
    });
  }
});

module.exports = router;
