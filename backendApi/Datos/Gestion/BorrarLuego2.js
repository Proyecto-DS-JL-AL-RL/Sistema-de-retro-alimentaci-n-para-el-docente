const createCurso = require('./gCurso').createCurso;

var mongoose = require('mongoose');


const mongoDB = 'mongodb://127.0.0.1:27017/DBProyecto';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(db => console.log('BDConnected'))
.catch(err=>console.log(err));


createCurso({
    nombre: "Inteligencia Artificial",
    codigo: "CC421",
    IDProfe: "19942196K",
    descripcion: " ",
    alumnos: []
});
createCurso({
    nombre: "Administracion de Redes",
    codigo: "CC312",
    IDProfe: "19801295J",
    descripcion: " ",
    alumnos: []
})
createCurso({
    nombre: "Desarollo de Software",
    codigo: "CC3S2",
    IDProfe: "19851225A",
    descripcion: " ",
    alumnos: []
})

//createCurso("CC421", "Inteligencia Artificial", "19942196K", [])
//createCurso("CC312", "Administracion de Redes", "19801295J", [])
//createCurso("CC3S2", "Desarollo de Software", "19851225A", [])
