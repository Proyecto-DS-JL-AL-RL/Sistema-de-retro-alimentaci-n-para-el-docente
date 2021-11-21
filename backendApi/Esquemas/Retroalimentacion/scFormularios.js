var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Formulario = new Schema({
    titulo: String,  
    preguntas: [{
        titulo: String,  
        descripcion: String,
        alternativas: [ String]
    }]
});

module.exports = mongoose.model('Formulario',Formulario);

