const {Schema, model} = require('mongoose');

const user = new Schema({
    codigo: String,
    nombre: String,
    apellido: String,
    correo: String,
    condicion: String,
    edad: Number,
    sala:{type:String, default:''}
})

module.exports = model('User', user);