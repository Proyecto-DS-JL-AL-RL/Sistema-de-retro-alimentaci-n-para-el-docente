var mongoose = require('mongoose');
const clase = require('./scClasses');
const comentario = require('./scComentario');
const form = require('./scFormularios');
const resForm = require('./scRespuestaForm');
const mongoDB = 'mongodb://127.0.0.1:27017/DBProyecto';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(db => console.log('BDConnected'))
.catch(err=>console.log(err));


comentario.create(
    {
        titulo: 'Justificacion de falta',  
        cuerpo: 'Buenas tardes profesor, este dia tuve un asunto familiar, y no pude asistir.',
        alumno: '619a5405e88beae07111af3f',
        clase: '619a58750b4e8d8becff2325',
        hasFile: true,
        fileRef: 'Yet to implement'
    },
    {
        titulo: 'Justificacion de falta',  
        cuerpo: 'Buenas tardes profesor, este dia tuve un asunto familiar, y no pude asistir.',
        alumno: '619a5405e88beae07111af40',
        clase: '619a58750b4e8d8becff2325',
        hasFile: true,
        fileRef: 'Yet to implement'
    },
    {
        titulo: 'Justificacion de falta',  
        cuerpo: 'Buenas tardes profesor, este dia tuve un asunto familiar, y no pude asistir.',
        alumno: '619a5405e88beae07111af3f',
        clase: '619a58750b4e8d8becff2326',
        hasFile: true,
        fileRef: 'Yet to implement'
    }
);

/*resForm.create(




);*/
