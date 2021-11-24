var mongoose = require('mongoose');
const {Alumno,Curso} = require('./prueba');
const mongoDB = 'mongodb://127.0.0.1:27017/DBProyecto';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(db => console.log('BDConnected'))
.catch(err=>console.log(err));



Alumno.create({nombre: 'Jorge'});
Alumno.create({nombre: 'Luis'});
Alumno.create({nombre: 'Alexander'});
Alumno.create({nombre: 'Royer'});

Curso.create({titulo: "Administracion de Redes"});