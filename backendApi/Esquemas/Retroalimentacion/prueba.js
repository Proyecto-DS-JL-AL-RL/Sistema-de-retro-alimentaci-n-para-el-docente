
var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AlumnoSch = new Schema({
    nombre: String,  
});
const Alumno = mongoose.model('Alumno',AlumnoSch);



var CursoSc = new Schema({
    titulo: String,  
    cuerpo: String,
    hasFile: Boolean
});
const Curso = mongoose.model('Curso',CursoSc);


module.exports = {Alumno,Curso};

