var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Formulario = new Schema({
    titulo: String, 
    clase: {type: Schema.Types.ObjectId, ref: 'Class'}, 
    respondidos : Number,
    preguntas: [{
        titulo: String,  
        descripcion: String,
        alternativas: [ {
            descripcion: String,
            percent: Number
        }]
    }]
});

module.exports = mongoose.model('Formu',Formulario);

