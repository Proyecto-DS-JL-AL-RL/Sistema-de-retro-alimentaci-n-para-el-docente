var Comentary = require('../../Esquemas/Retroalimentacion/scComentario');


var rankClass = async function (clase){
    //Envio de calificaacion de una clase
    return("xd");
}

var createCommentary = async function(comentario){
    //Crear un comentario
    return("xd");
}

var getCommentaryView = async function(idComentario){
    //Vista del comentario
    var response = await Comentary.findById(idComentario).populate("alumno").populate('clase').catch(err=> console.log(err));;
    console.log(response);
    return response;
}

var getCommentaryList = async function(idClase){
    //MostrarListaComentarios
    var response = await Comentary.find({clase :idClase}).catch(err=> console.log(err));;
    console.log(response);
    return response;
}

module.exports.rankClass = rankClass;
module.exports.createCommentary = createCommentary;
module.exports.getCommentaryView = getCommentaryView;
module.exports.getCommentaryList = getCommentaryList;