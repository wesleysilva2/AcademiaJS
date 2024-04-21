const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: String,
    matricula: String,
    email: String,
    dataNascimento: String,
    matriculaVencida: Boolean,
    avatar_url: String,
});

module.exports = mongoose.model('User', UserSchema);