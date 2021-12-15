var Nota = require('../../Esquemas/Gestion/sNota');

var crearNota = async function(nota){
    const newnota = new Nota(nota)//.catch(err=> console.log(err))
    await newnota.save()
}

var findNota = async function(codigo){
    const finnota = await Nota.find(codigo).catch(err=> console.log(err))
    return finnota
}

var updateNota = async function(codigo, update){
    const newnota = await Nota.findOneAndUpdate(codigo, update,  {
        new: true
      }).catch(err=> console.log(err))
    console.log(update)
    console.log(codigo)
    console.log(newnota)
    return newnota.save()
}

var deleteNota = async function(codigo){
    await Nota.findOneAndDelete(codigo)
}
/*
crearNota("20192196K", "CC421", "PC1", 12)
crearNota("20192196K", "CC421", "PC2", 10)
crearNota("20192196K", "CC421", "Tarea01", 10)
crearNota("20192196K", "CC3S2", "Tarea01", 12)
crearNota("20201295A", "CC3S2", "Tarea01", 12)
crearNota("20192196K", "CC3S2", "PC1", 13)
crearNota("20201295A", "CC3S2", "PC1", 15)
crearNota("20191956F", "CC3S2", "PC1", 10)
*/
module.exports.crearNota = crearNota;
module.exports.findNota = findNota;
module.exports.updateNota = updateNota;
module.exports.deleteNota = deleteNota;

