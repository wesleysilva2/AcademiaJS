const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    nomeUsuario: String,
    matricula: String,
    emailUsuario: String,
    dataNascimento: String,
    matriculaVencida: Boolean,
    funcionario: String,
    avatar_url: String,
});

module.exports = mongoose.model('User', UserSchema);