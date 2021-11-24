var mongoose = require('mongoose');
const clase = require('./scClasses');
const comentario = require('./scComentario');
const form = require('./scFormularios');
const resForm = require('./scRespuestaForm');
const mongoDB = 'mongodb://127.0.0.1:27017/DBProyecto';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(db => console.log('BDConnected'))
.catch(err=>console.log(err));


clase.create(
{titulo: 'Dispositivos de Red', descripcion: 'Repaso de dispositivos de red', fecha: new Date(), curso: '619a5405e88beae07111af43'},
{titulo: 'Docker', descripcion: 'Pruebas', fecha: new Date(), curso: '619a5405e88beae07111af43'},
{titulo: 'PC', descripcion: 'asd', fecha: new Date(), curso: '619a5405e88beae07111af43'},
{titulo: 'Dispositivos de Red 2', descripcion: 'Repaso de dispositivos de red 2', fecha: new Date(), curso: '619a5405e88beae07111af43'}
);

form.create(
    {titulo: 'Recuperacion de Clases', 
         preguntas: [
             { titulo: 'Dia de recuperacion',   descripcion: 'seleccione el dia',  alternativas: [ '13','15','16(antes del parcial)'] },
             { titulo: 'Hora',   descripcion: 'seleccione la hora que tiene disponible',  alternativas: [ '10AM','2PM','12AM'] },
            ]
    },
    {titulo: 'Modalidad PC9', 
         preguntas: [
             { titulo: 'Modalidad',   descripcion: 'seleccione la modalidad de examen',  alternativas: [ 'Sincronico','Asincronico'] },
             { titulo: 'Dia',   descripcion: 'seleccione el dia',  alternativas: [ '23','25','26 (el parcial)'] },
            ]
    }

);
