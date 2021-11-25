var mongoose = require('mongoose');
const scClasses = require('./scClasses');
const mongoDB = 'mongodb://127.0.0.1:27017/DBProyecto';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(db => console.log('BDConnected'))
.catch(err=>console.log(err));



scClasses.create(
    {titulo: 'Dispositivos de Red', descripcion: 'Repaso de dispositivos de red', fecha: new Date(), curso: '619f3513a76997a909c583b9'},
    {titulo: 'Docker', descripcion: 'Pruebas', fecha: new Date(), curso: '619f3513a76997a909c583b9'},
    {titulo: 'PC', descripcion: 'asd', fecha: new Date(), curso: '619f3513a76997a909c583b9'},
    {titulo: 'Dispositivos de Red 2', descripcion: 'Repaso de dispositivos de red 2', fecha: new Date(), curso: '619f3513a76997a909c583b9'}
    );