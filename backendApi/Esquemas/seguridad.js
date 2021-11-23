var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Seguridad = new Schema({
    idUser: {type: Schema.Types.ObjectId, ref: 'User'},
    hashedPassword : String
});

module.exports = mongoose.model('securityRec',Seguridad);

