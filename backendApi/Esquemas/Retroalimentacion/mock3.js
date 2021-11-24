var mongoose = require('mongoose');
const user = require('../Gestion/gUser');

const mongoDB = 'mongodb://127.0.0.1:27017/DBProyecto';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(db => console.log('BDConnected'))
.catch(err=>console.log(err));

user.create({
    codigo: '20192020A',
    nombre: 'Luis',
    apellido: 'Ortega',
    correo: 'asdasd',
    contransena: 's',
    condicion: 'dx',
    tipo: "Profesor",
    edad: 20,
});

user.create({
    codigo: '20192164A',
    nombre: 'Jorge',
    apellido: 'Parishuana',
    correo: 'asdasd',
    contransena: 's',
    condicion: 'dx',
    tipo: "Alumno",
    edad: 20,
});