var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Formulario = new Schema({
    titulo: String, 
    clase: {type: Schema.Types.ObjectId, ref: 'Class'}, 
    preguntas: [{
        titulo: String,  
        descripcion: String,
        alternativas: [ String]
    }]
});

module.exports = mongoose.model('Formu',Formulario);

