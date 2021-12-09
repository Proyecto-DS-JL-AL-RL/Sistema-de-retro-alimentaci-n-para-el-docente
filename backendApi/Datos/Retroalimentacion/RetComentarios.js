var Comentary = require('../../Esquemas/Retroalimentacion/scComentario');
var user = require('../../Esquemas/Gestion/gUser');

var rankClass = async function (clase){
    //Envio de calificaacion de una clase
    return("xd");
}

var createCommentary = async function(comentario){
    //Crear un comentario
    const usuario = await user.findOne({codigo:comentario.usuario}).exec().catch(err=>console.log(err));
    if (usuario){
        //console.log(usuario);
        const commentary = {
            titulo: comentario.titulo,  
            cuerpo: comentario.descripcion,
            alumno: usuario._id.toString(),
            clase: comentario.clase,
            hasFile: true,
            fileRef: 'NotImplementedYet'
        }
        //console.log(commentary);
        Comentary.create(commentary);
    }
    return("Done");
}

var getCommentaryView = async function(idComentario){
    //Vista del comentario
    //console.log(idComentario);
    var response = await Comentary.findById(idComentario).populate("alumno").populate('clase').catch(err=> console.log(err));;
    //console.log(response);
    return response;
}

var getCommentaryList = async function(idClase,param){
    //MostrarListaComentarios
    var response = [];
    if (param == "general"){
        response = await Comentary.find({clase :idClase}).catch(err=> console.log(err));
    }else{
        const usuario = await user.findOne({codigo: param}).exec().catch(err=>console.log(err));
        if (usuario){
            response = await Comentary.find({clase :idClase , alumno:usuario._id.toString()}).catch(err=> console.log(err));
        }
    }    
    //console.log(response);
    return response;
}

module.exports.rankClass = rankClass;
module.exports.createCommentary = createCommentary;
module.exports.getCommentaryView = getCommentaryView;
module.exports.getCommentaryList = getCommentaryList;