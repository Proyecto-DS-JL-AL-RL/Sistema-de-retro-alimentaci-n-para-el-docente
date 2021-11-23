var mongoose = require('mongoose');
const user = require('../Gestion/gUser');

const mongoDB = 'mongodb://127.0.0.1:27017/DBProyecto';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then(db => console.log('BDConnected'))
.catch(err=>console.log(err));

user.create({
    codigo: '20192164A',
    nombre: 'Jorge',
    apellido: 'Parishuana',
    correo: 'asdasd',
    contransena: 's',
    condicion: 'dx',
    edad: 20,
});