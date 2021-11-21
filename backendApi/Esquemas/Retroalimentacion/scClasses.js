var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Clase = new Schema({
    titulo: String,  
    descripcion: String,
    fecha: Date,
    curso: {type: Schema.Types.ObjectId, ref: 'Curso'}
});

module.exports = mongoose.model('Clase',Clase);

