var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RespuestaForm = new Schema({
    titulo: String,  
    cuerpo: String,
    alumno: {type: Schema.Types.ObjectId, ref: 'Alumnos'},
    clase: {type: Schema.Types.ObjectId, ref: 'Clases'},
    hasFile: Boolean,
    fileRef: String
});

module.exports = mongoose.model('RespuestaForm',RespuestaForm);

