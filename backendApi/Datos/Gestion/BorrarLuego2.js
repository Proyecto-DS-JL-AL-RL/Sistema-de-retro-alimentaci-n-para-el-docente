const user = require('../../Esquemas/Gestion/gUser');
const sess = require('../userSession');
const userStats = require('../../Esquemas/Retroalimentacion/scStats');
var mongoose = require('mongoose');


const mongoDB = 'mongodb://127.0.0.1:27017/DBProyecto';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(db => console.log('BDConnected'))
.catch(err=>console.log(err));

userStats.create({
    idCur: '61ba66b693e50cca7cae5af0', 
    participacion: 80,
    Aciertos: 65,
    alumnosStats: [{
        alumno: '61ae70480d28223f93a0a86f',  
        participacion: 90,
        aciertos: 70,
        aumento: 50,
        resPromedio: 5
    },
    {
        alumno: '619e69035c03472c4eafba62',  
        participacion: 70,
        aciertos: 60,
        aumento: 20,
        resPromedio: -5
    }
]
});


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
/*
sess.savePassword("20002000A","pass");
sess.savePassword("20002000B","pass");
*/
