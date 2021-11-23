var User = require('../../Esquemas/Gestion/gUser');
require('../../database');


var createUser = async function(idcodigo, nombre, apellido, correo, contrasena, condicion, edad){
    const newusr = new User({codigo:idcodigo,
                    nombre: nombre,
                    apellido: apellido,
                    correo: correo,
                    contransena: contrasena,
                    condicion: condicion,
                    edad: edad})//.catch(err=> console.log(err))

    await newusr.save()
}

var fidnUser = async function(idcodigo){
    const findusr = User.find({codigo:idcodigo}).catch(err=> console.log(err))
    return findusr
}

var updateUser = async function(codigo, field, text){
    const user = await User.findOneAndUpdate({codigo:codigo})
    user.field = text
    user.save()
}

var deleteUser = async function(codigo){
    await User.findOneAndDelete({codigo:codigo})
}



module.exports.createUser = createUser;
module.exports.fidnUser = fidnUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;