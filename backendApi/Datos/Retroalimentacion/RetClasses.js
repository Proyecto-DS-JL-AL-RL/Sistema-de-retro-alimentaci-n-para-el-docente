var clase = require('../../Esquemas/Retroalimentacion/scClasses');


var getClass = async function (idClass){
    console.log(idClass);
    //Informacion de una clase
    var response = await clase.findById(idClass).catch(err=> console.log(err));;
    //console.log(response);
    return response;
}

var createClass = async function(clase){
    //Crear una clase
    return("xd");
}

var deleteClass = async function(clase){
    //Archivar una clase
    return("xd");
}

var getListClass = async function(idCurso){
    //Lista de clases
    var response = await clase.find({curso :idCurso}).catch(err=> console.log(err));;
    //console.log(response);
    return response;
}

module.exports.getClass = getClass;
module.exports.createClass = createClass;
module.exports.deleteClass = deleteClass;
module.exports.getListClass = getListClass;