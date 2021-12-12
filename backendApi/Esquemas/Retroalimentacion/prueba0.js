var mongoose = require('mongoose');
const clase = require('./scClasses');
const comentario = require('./scComentario');
const form = require('./scFormularios');
const resForm = require('./scRespuestaForm');
const mongoDB = 'mongodb://127.0.0.1:27017/DBProyecto';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(db => console.log('BDConnected'))
.catch(err=>console.log(err));



form.findOneAndUpdate({titulo: "Modalidad PC9"},{clase : '619f36e3b1281b5139de6934',respondidos : 0.0}).exec();

form.findOneAndUpdate({titulo: "Recuperacion de Clases"},{clase : '619f36e3b1281b5139de6934',respondidos: 0.0}).exec();