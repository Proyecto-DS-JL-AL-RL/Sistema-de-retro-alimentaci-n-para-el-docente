var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var registro = new Schema({
    codigoCurso: String,
    token: {
        type: String,
        unique:true
    },
})

module.exports = mongoose.model('registro',registro);