const createUser = require('./gUser').createUser;

var mongoose = require('mongoose');


const mongoDB = 'mongodb://127.0.0.1:27017/DBProyecto';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(db => console.log('BDConnected'))
.catch(err=>console.log(err));

createUser({codigo:"20192196K" , nombre:"Alexander" , apellido:"Lique" , correo:"alexander.lique.l@uni.pe",  condicion:"Alumno", edad:20})
createUser({codigo:"20192164A" , nombre:"Jorge" , apellido:"Parishuana" , correo:"Profe@uni.pe",  condicion:"Profesor", edad:20})
