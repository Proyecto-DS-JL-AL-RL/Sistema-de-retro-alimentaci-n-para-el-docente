var Curso = require('../../Esquemas/Gestion/gCurso');

var createCurso = async function(idcodigo, nombre, idprofe, nameprofesor){
    const newcurso = new Curso({codigo:idcodigo,
                    nombre: nombre,
                    IDProfe: idprofe,
                    nombreProfe: nameprofesor})//.catch(err=> console.log(err))
    await newcurso.save()
}

var fidnCurso = async function(codigo){
    const findcurso = await Curso.find(codigo).catch(err=> console.log(err))
    return findcurso
}

var updateCurso = async function(codigo, update){
    const curso = await Curso.findOneAndUpdate({codigo:codigo}, update)
    curso.save()
}

var deleteCurso = async function(codigo){
    await Curso.findOneAndDelete({codigo:codigo})
}
//createCurso("CC421", "Inteligencia Artificial", "19942196K", [])
//createCurso("CC312", "Administracion de Redes", "19801295J", [])
//createCurso("CC3S2", "Desarollo de Software", "19851225A", [])

//fidnCurso({codigo:"CC421"})//)
//updateCurso("CC421", {nombre:"Inteligencia Artificial"})


module.exports.createCurso = createCurso;
module.exports.fidnCurso = fidnCurso;
module.exports.updateCurso = updateCurso;
module.exports.deleteCurso = deleteCurso;