var mongoose = require('mongoose');
const scClasses = require('./scClasses');
const scForms = require('./scFormularios');
const mongoDB = 'mongodb://127.0.0.1:27017/DBProyecto';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(db => console.log('BDConnected'))
.catch(err=>console.log(err));


/*
scClasses.create(
    {titulo: 'Dispositivos de Red', descripcion: 'Repaso de dispositivos de red', fecha: new Date(), curso: '619f3513a76997a909c583b9'},
    {titulo: 'Docker', descripcion: 'Pruebas', fecha: new Date(), curso: '619f3513a76997a909c583b9'},
    {titulo: 'PC', descripcion: 'asd', fecha: new Date(), curso: '619f3513a76997a909c583b9'},
    {titulo: 'Dispositivos de Red 2', descripcion: 'Repaso de dispositivos de red 2', fecha: new Date(), curso: '619f3513a76997a909c583b9'}
    );
    */

scForms.create({
    titulo: "Recuperacion de Clases", 
    clase: '619f36e3b1281b5139de6934', 
    respondidos : 0,
    preguntas: [{
        titulo: "Dia de recuperacion",  
        descripcion: "seleccione el dia",
        alternativas: [ 
            { descripcion: "13", percent: 0.0},
            { descripcion: "15", percent: 0.0},
            { descripcion: "16(antes del parcial)", percent: 0.0}
        ]
    },
    {
        titulo: "Hora",  
        descripcion: "seleccione la hora que tiene disponible",
        alternativas: [ 
            { descripcion: "10AM", percent: 0.0},
            { descripcion: "2PM", percent: 0.0},
            { descripcion: "12AM", percent: 0.0}
        ]
    },
]
}
);

scForms.create({
    titulo: 'Modalidad PC9', 
    clase: '619f36e3b1281b5139de6934', 
    respondidos : 0,
    preguntas: [{
        titulo:  "Modalidad",  
        descripcion: "seleccione la modalidad de examen",
        alternativas: [ 
            { descripcion: "Sincronico", percent: 0.0},
            { descripcion: "Asincronico", percent: 0.0}
        ]
    },
    {
        titulo: "Dia",  
        descripcion: "seleccione el dia",
        alternativas: [ 
            { descripcion: "23", percent: 0.0},
            { descripcion: "25", percent: 0.0},
            { descripcion: "26 (el parcial)", percent: 0.0}
        ]
    },
]
}
);