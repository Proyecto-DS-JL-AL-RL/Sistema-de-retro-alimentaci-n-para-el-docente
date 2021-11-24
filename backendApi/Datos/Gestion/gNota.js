var Nota = require('../../Esquemas/Gestion/sNota');

var crearNota = async function(codigoAlumn, codigCurso, TipoPractica, Puntuacion){
    const newnota = new Nota({
                    codigoAlumn:codigoAlumn,
                    codigCurso: codigCurso,
                    TipoPractica: TipoPractica,
                    Puntuacion: Puntuacion})//.catch(err=> console.log(err))

    await newnota.save()
}

var findNota = async function(codigo){
    const finnota = await Nota.find(codigo).catch(err=> console.log(err))
    return finnota
}

var updateNota = async function(codigo, update){
    const nota = await Nota.findOneAndUpdate(codigo, update)
    nota.save()
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

