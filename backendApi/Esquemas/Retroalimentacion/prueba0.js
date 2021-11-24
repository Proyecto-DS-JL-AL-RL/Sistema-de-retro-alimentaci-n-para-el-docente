var mongoose = require('mongoose');
const clase = require('./scClasses');
const comentario = require('./scComentario');
const form = require('./scFormularios');
const resForm = require('./scRespuestaForm');
const mongoDB = 'mongodb://127.0.0.1:27017/DBProyecto';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(db => console.log('BDConnected'))
.catch(err=>console.log(err));

comentario.findOneAndUpdate({titulo: "Justificacion de falta"},{fileRef : 'Yet to implement F'});