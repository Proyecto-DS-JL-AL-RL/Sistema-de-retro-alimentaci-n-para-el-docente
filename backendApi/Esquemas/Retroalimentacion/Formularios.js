var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Formulario = new Schema({
    id: Schema.Types.ObjectId,
    titulo: String,  
    preguntas: [{type: Schema.Types.ObjectId, ref: 'Preguntas'}]
});

module.exports = mongoose.model('Formulario',Formulario);

