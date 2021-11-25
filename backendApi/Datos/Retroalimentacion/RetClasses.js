var clase = require('../../Esquemas/Retroalimentacion/scClasses');
var curso = require('../../Esquemas/Gestion/gCurso');

var getClass = async function (idClass){
    //console.log(idClass);
    //Informacion de una clase
    var response = await clase.findById(idClass).catch(err=> console.log(err));;
    //console.log(response);
    return response;
}

var createClass = async function(idCurso,request){

    cursoReq = await curso.findOne({codigo:idCurso}).exec().catch(err=>console.log(err));
    await clase.create({
        titulo: request.body.titulo,  
        descripcion: request.body.cuerpo,
        fecha: new Date(),
        curso: cursoReq._id.toString()
    });
    //Crear una clase
    return("xd");
}

var deleteClass = async function(clase){
    //Archivar una clase
    return("xd");
}

var getListClass = async function(codigoCurso){
    //Lista de clases
    //console.log(codigoCurso);
    const cursoResponse = await curso.findOne({codigo:codigoCurso}).exec().catch(err=>console.log(err));
    var response = [];
    if (cursoResponse){
        //console.log(cursoResponse);
        response = await clase.find({curso : cursoResponse._id}).catch(err=> console.log(err));;
    }
    //console.log(response);
    return response;
}

module.exports.getClass = getClass;
module.exports.createClass = createClass;
module.exports.deleteClass = deleteClass;
module.exports.getListClass = getListClass;