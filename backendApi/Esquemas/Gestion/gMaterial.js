const {Schema, model} = require('mongoose');

const material = new Schema({
    titulo: String,
    description: String,
    file:{type: String},
    curso: String
})

module.exports = model('material', material);