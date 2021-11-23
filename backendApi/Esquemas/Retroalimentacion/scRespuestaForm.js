var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RespuestaForm = new Schema({
    titulo: String,  
    cuerpo: String,
    alumno: {type: Schema.Types.ObjectId, ref: 'Alumno'},
    clase: {type: Schema.Types.ObjectId, ref: 'Class'},
    hasFile: Boolean,
    fileRef: String
});

module.exports = mongoose.model('AnswerForm',RespuestaForm);

