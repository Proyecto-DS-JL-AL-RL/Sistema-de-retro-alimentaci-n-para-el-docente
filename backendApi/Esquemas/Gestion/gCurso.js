var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var curso = new Schema({
    nombre: String,
    codigo: String,
    IDProfe: String,
    nombreProfe:String
})

module.exports = mongoose.model('curso',curso);