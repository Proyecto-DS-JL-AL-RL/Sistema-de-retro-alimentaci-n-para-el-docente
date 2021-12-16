var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Estadisticas = new Schema({
    idCur: {type: Schema.Types.ObjectId,ref: 'curso'}, 
    participacion: Number,
    Aciertos: Number,
    alumnosStats: [{
        alumno: {type: Schema.Types.ObjectId,ref: 'User'},  
        participacion: Number,
        aciertos: Number,
        aumento: Number,
        resPromedio: Number
    }]
});

module.exports = mongoose.model('classStat',Estadisticas);

