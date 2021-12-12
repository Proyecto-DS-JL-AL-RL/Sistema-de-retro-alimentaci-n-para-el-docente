var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Comentario = new Schema({
    titulo: String,  
    cuerpo: String,
    alumno: {type: Schema.Types.ObjectId, ref: 'User'},
    clase: {type: Schema.Types.ObjectId, ref: 'Class'},
    hasFile: Boolean,
    fileRef: String
});

module.exports = mongoose.model('Comentary',Comentario);

