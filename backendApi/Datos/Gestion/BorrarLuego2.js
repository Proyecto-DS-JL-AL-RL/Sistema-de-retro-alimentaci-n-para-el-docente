const user = require('../../Esquemas/Gestion/gUser');
const sess = require('../userSession');
var mongoose = require('mongoose');


const mongoDB = 'mongodb://127.0.0.1:27017/DBProyecto';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(db => console.log('BDConnected'))
.catch(err=>console.log(err));



/*
user.create({
    codigo:"20002000A",
    nombre:"Royer",
    apellido:"Lop",
    correo:"correo@uni.pe",
    condicion:"Alumno",
    edad:20
});


user.create({
    codigo:"20002000B",
    nombre:"RoyerProf",
    apellido:"Lop",
    correo:"correo@uni.pe",
    condicion:"Profesor",
    edad:20
});
*/

sess.savePassword("20002000A","pass");
sess.savePassword("20002000B","pass");
