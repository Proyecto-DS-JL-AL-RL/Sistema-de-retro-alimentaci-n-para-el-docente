var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var user = new Schema({
    codigo: String,
    nombre: String,
    apellido: String,
    correo: String,
    contransena: String,
    edad: Number
})

module.exports = mongoose.model('user', user);