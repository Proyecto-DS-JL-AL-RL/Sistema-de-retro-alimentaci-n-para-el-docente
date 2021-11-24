const {Schema, model} = require('mongoose');

const user = new Schema({
    codigo: {
        type: String,
        unique:true
    },
    nombre: String,
    apellido: String,
    correo: String,
    contransena: String,
    condicion: String,
    tipo: String,
    edad: Number,
})

module.exports = model('User', user);