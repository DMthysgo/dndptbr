const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    require: false,
  },
  senha: {
    type: String,
    required: true,
  },
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;
