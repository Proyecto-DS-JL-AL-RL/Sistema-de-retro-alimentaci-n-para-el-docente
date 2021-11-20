var prueba = require('../../Esquemas/Retroalimentacion/prueba');


var getClass = async function (titulo){
    //Informacion de una clase
    var response = await prueba.find({}).exec();
    console.log(response);
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

var getListClass = async function(curso){
    //Lista de clases
    return("xd");
}

module.exports.getClass = getClass;
module.exports.createClass = createClass;
module.exports.deleteClass = deleteClass;
module.exports.getListClass = getListClass;