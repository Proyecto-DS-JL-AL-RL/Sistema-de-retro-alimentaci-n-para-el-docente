var registro = require('../../Esquemas/Gestion/Registro');

var Registrar = async function(nota){
    const newregistro = new registro(nota)//.catch(err=> console.log(err))
    await newregistro.save()
}

var BuscarToken = async function(token){
    const findtoken = await registro.find(token).catch(err=> console.log(err))
    return findtoken
}

module.exports.Registrar = Registrar;
module.exports.BuscarToken = BuscarToken;