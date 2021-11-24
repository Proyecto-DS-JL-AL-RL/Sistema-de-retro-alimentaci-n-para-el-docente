var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RespuestaForm = new Schema({
    Alumno: {type: Schema.Types.ObjectId, ref: 'User'},
    formOrigen: {type: Schema.Types.ObjectId, ref: 'Formu'},  
    respuestas: [Number]
});

module.exports = mongoose.model('AnswerForm',RespuestaForm);

