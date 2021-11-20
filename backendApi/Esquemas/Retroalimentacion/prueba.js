
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var prueba = new Schema({
    titulo: String,  
    cuerpo: String,
    hasFile: Boolean
});

module.exports = mongoose.model('Pruebass',prueba);

