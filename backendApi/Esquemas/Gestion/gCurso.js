var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var curso = new Schema({
    nombre: String,
    codigo: String,
    IDProfe: {type: String},
    descripcion: String,
    alumnos: []
})

module.exports = mongoose.model('curso',curso);