var User = require('../../Esquemas/Gestion/gUser');
//require('../../database');

var createUser = async function(idcodigo, nombre, apellido, correo, condicion, edad){
    const newusr = new User({codigo:idcodigo,
                    nombre: nombre,
                    apellido: apellido,
                    correo: correo,
                    condicion: condicion,
                    edad: edad})//.catch(err=> console.log(err))

    await newusr.save()
}

var findUser = async function(idcodigo){
    const findusr = await User.find(idcodigo).catch(err=> console.log(err))
    return findusr
}

var updateUser = async function(codigo, update){
    const user = await User.findOneAndUpdate(codigo, update, {
        new: true
      }).catch(err=> console.log(err))
    user.save()
    return user
}

var deleteUser = async function(id){
   await User.findByIdAndDelete(id)
}

//deleteUser("619d4e6afeced0bd70082270")
/*
deleteUser("20192196K")
deleteUser("20201295A")
deleteUser("20191956F")
deleteUser("19942196K")
deleteUser("19801295J")
deleteUser("19851225A")
createUser("20192196K", "Alexander", "Lique", "alexander.lique.l@uni.pe", "Alumno", 20)
createUser("20201295A", "Iino", "Miko", "iino.miko.m@uni.pe", "Alumno", 16)
createUser("20191956F", "Jose", "Gomez", "jorge.gomez.g@uni.pe", "Alumno", 21)
createUser("19942196K", "Roberto", "Dominguez", "roberto.dominguez.d@uni.edu.pe", "Profesor", 27)
createUser("19801295J", "Ernesto", "Muller", "ernesto.muller.m@uni.edu.pe", "Profesor", 41)
createUser("19851225A", "Emilio", "Werner", "emilio.werner.m@uni.edu.pe", "Profesor", 42)
*/

module.exports.createUser = createUser;
module.exports.findUser = findUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;