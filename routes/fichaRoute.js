const router = require("express").Router();

const fichaModel = require("../models/ficha.model");

// Registrar ficha no Sistema
router.post("/atualizar", async (req, res) => {
  const {
    user,
    nome,
    especie,
    subespecie,
    classe,
    subclasse,
    experiencia,
    inspiracao,
    alinhamento,
    deslocamentoVoo,
    forca,
    destreza,
    constituicao,
    inteligencia,
    sabedoria,
    carisma,
    profAtletismo,
    profAcrobacia,
    profFurtividade,
    profprestidigitacao,
    profArcanismo,
    profHistoria,
    profInvestigacao,
    profNatureza,
    profReligiao,
    profIntuicao,
    profAnimais,
    profMedicina,
    profPercepcao,
    profSobrevivencia,
    profAtuacao,
    profManipulacao,
    profIntimidacao,
    profPersuasao,
    profIdiomaComum,
    profIdiomaAnao,
    profIdiomaElfico,
    profIdiomaGigante,
    profIdiomaGnomico,
    profIdiomaGoblin,
    profIdiomaHalfling,
    profIdiomaOrc,
    profIdiomaAbissal,
    profIdiomaCelestial,
    profIdiomaSubterraneo,
    profIdiomaDraconici,
    profIdiomaInfernal,
    profIdiomaPrimordial,
    profIdiomaSilvestre,
    profIdiomaSubcomum,
    profItensArmaduraLeve,
    profItensArmaduraMedia,
    profItensArmaduraPesada,
    profItensArmaSimplesCAC,
    profItensArmaSimplesAD,
    profItensArmaMarcialCAC,
    profItensArmaMarcialAD,
    profItensInstrumentos,
    profItensDisfarce,
    profItensFalsificacao,
    profItensHerbalismo,
    profItensVeneno,
    profItensBaralho,
    profItensDados,
    profItensXadrez,
    profItensLadrao,
    profItensNavegacao,
    profItensOutros,
    antecedentes,
    personalidade,
    ideais,
    vinculos,
    defeitos,
    genero,
    idade,
    tamanho,
    massa,
    pele,
    olhos,
    cabelo,
    tattoo,
    barba,
    deficiencia,
    aparenciaDescricao,
    caracteristicas,
    habilidades,
    caBase,
    caHabilidade,
    caBonus,
    armadura,
    escudo,
    pvTemp,
    pvAtual,
    pvTotal,
    testeMorteSucesso1,
    testeMorteSucesso2,
    testeMorteSucesso3,
    testeMorteFalha1,
    testeMorteFalha2,
    testeMorteFalha3,
    armas,
    bonusExtraAtaque,
    armaHabilidade,
    armaProf,
    armaDescricao,
    itensMagicos,
    municaoNome,
    municaoQuantidade,
    pecasCobre,
    pecasPrata,
    pecasElectro,
    pecasOuro,
    pecasPlatina,
    itemNome,
    itemMassa,
    itemQuantidade,
    petNome,
    petEspecie,
    petCA,
    petPVatual,
    petPVmax,
    petDeslocamento,
    petForca,
    petDestreza,
    petConstituicao,
    petInteligencia,
    petSabedoria,
    petCarisma,
    petDescricao,
    riquezas,
    magiaHabilidade,
    magiaCD,
    magiaBonus,
    magiaPreparada,
    espacoMagia0atual,
    espacoMagia1atual,
    espacoMagia2atual,
    espacoMagia3atual,
    espacoMagia4atual,
    espacoMagia5atual,
    espacoMagia6atual,
    espacoMagia7atual,
    espacoMagia8atual,
    espacoMagia9atual,
    espacoMagia1total,
    espacoMagia2total,
    espacoMagia3total,
    espacoMagia4total,
    espacoMagia5total,
    espacoMagia6total,
    espacoMagia7total,
    espacoMagia8total,
    espacoMagia9total,
    listaMagiaPreparada,
    listaMagiaNivel,
    listaMagiaNome,
    listaMagiaTempo,
    listaMagiaDistancia,
    listaMagiaComponentes,
    listaMagiaDuracao,
    listaMagiaRital,
    listaMagiaConcentracao,
    listaMagiaReferencia,
    listaMagiaEscola,
    listaMagiaMateriais,
    listaMagiaDescricao,
    contatos,
    anotacoes,
  } = req.body;
  const Ficha = {
    user,
    nome,
    especie,
    subespecie,
    classe,
    subclasse,
    experiencia,
    inspiracao,
    alinhamento,
    deslocamentoVoo,
    forca,
    destreza,
    constituicao,
    inteligencia,
    sabedoria,
    carisma,
    profAtletismo,
    profAcrobacia,
    profFurtividade,
    profprestidigitacao,
    profArcanismo,
    profHistoria,
    profInvestigacao,
    profNatureza,
    profReligiao,
    profIntuicao,
    profAnimais,
    profMedicina,
    profPercepcao,
    profSobrevivencia,
    profAtuacao,
    profManipulacao,
    profIntimidacao,
    profPersuasao,
    profIdiomaComum,
    profIdiomaAnao,
    profIdiomaElfico,
    profIdiomaGigante,
    profIdiomaGnomico,
    profIdiomaGoblin,
    profIdiomaHalfling,
    profIdiomaOrc,
    profIdiomaAbissal,
    profIdiomaCelestial,
    profIdiomaSubterraneo,
    profIdiomaDraconici,
    profIdiomaInfernal,
    profIdiomaPrimordial,
    profIdiomaSilvestre,
    profIdiomaSubcomum,
    profItensArmaduraLeve,
    profItensArmaduraMedia,
    profItensArmaduraPesada,
    profItensArmaSimplesCAC,
    profItensArmaSimplesAD,
    profItensArmaMarcialCAC,
    profItensArmaMarcialAD,
    profItensInstrumentos,
    profItensDisfarce,
    profItensFalsificacao,
    profItensHerbalismo,
    profItensVeneno,
    profItensBaralho,
    profItensDados,
    profItensXadrez,
    profItensLadrao,
    profItensNavegacao,
    profItensOutros,
    antecedentes,
    personalidade,
    ideais,
    vinculos,
    defeitos,
    genero,
    idade,
    tamanho,
    massa,
    pele,
    olhos,
    cabelo,
    tattoo,
    barba,
    deficiencia,
    aparenciaDescricao,
    caracteristicas,
    habilidades,
    caBase,
    caHabilidade,
    caBonus,
    armadura,
    escudo,
    pvTemp,
    pvAtual,
    pvTotal,
    testeMorteSucesso1,
    testeMorteSucesso2,
    testeMorteSucesso3,
    testeMorteFalha1,
    testeMorteFalha2,
    testeMorteFalha3,
    armas,
    bonusExtraAtaque,
    armaHabilidade,
    armaProf,
    armaDescricao,
    itensMagicos,
    municaoNome,
    municaoQuantidade,
    pecasCobre,
    pecasPrata,
    pecasElectro,
    pecasOuro,
    pecasPlatina,
    itemNome,
    itemMassa,
    itemQuantidade,
    petNome,
    petEspecie,
    petCA,
    petPVatual,
    petPVmax,
    petDeslocamento,
    petForca,
    petDestreza,
    petConstituicao,
    petInteligencia,
    petSabedoria,
    petCarisma,
    petDescricao,
    riquezas,
    magiaHabilidade,
    magiaCD,
    magiaBonus,
    magiaPreparada,
    espacoMagia0atual,
    espacoMagia1atual,
    espacoMagia2atual,
    espacoMagia3atual,
    espacoMagia4atual,
    espacoMagia5atual,
    espacoMagia6atual,
    espacoMagia7atual,
    espacoMagia8atual,
    espacoMagia9atual,
    espacoMagia1total,
    espacoMagia2total,
    espacoMagia3total,
    espacoMagia4total,
    espacoMagia5total,
    espacoMagia6total,
    espacoMagia7total,
    espacoMagia8total,
    espacoMagia9total,
    listaMagiaPreparada,
    listaMagiaNivel,
    listaMagiaNome,
    listaMagiaTempo,
    listaMagiaDistancia,
    listaMagiaComponentes,
    listaMagiaDuracao,
    listaMagiaRital,
    listaMagiaConcentracao,
    listaMagiaReferencia,
    listaMagiaEscola,
    listaMagiaMateriais,
    listaMagiaDescricao,
    contatos,
    anotacoes,
  };

  const fichaExiste = await fichaModel.findOne({ user: user });

  if (!fichaExiste) {
    try {
      await fichaModel.create(Ficha);
      res.status(201).json({
        msg: "Ficha criada no sistema com sucesso!",
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  } else {
    try {
      await fichaModel.updateOne({ user: user }, Ficha);
      res.status(201).json({
        msg: "Ficha atualizada no sistema com sucesso!",
      });
    } catch (error) {
      res.status(500).json({ error: error });
    }
  }
});

router.get("/:user", async (req, res) => {
  const user = req.params.user;
  try {
    const Ficha = await fichaModel.findOne({ user: user });

    if (!Ficha) {
      res.status(422).json({ msg: "Ficha não encontrada no sistema" });
      return;
    }

    res.status(200).json(Ficha);
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
module.exports = router;