var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var nota = new Schema({
    codigoAlumn: String,
    codigCurso: String,
    TipoPractica: String,
    Puntuacion: Number
})  

module.exports = mongoose.model('Nota', nota);