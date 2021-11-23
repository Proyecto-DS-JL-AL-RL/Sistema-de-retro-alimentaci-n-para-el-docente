var form = require('../../Esquemas/Retroalimentacion/scFormularios');
var resForm = require('../../Esquemas/Retroalimentacion/scRespuestaForm');


var createForm = async function (formu){
    //Crear Form
    return("xd");
}

var answerForm = async function(form,answers){
    //Respuesta de a form
    return("xd");
}

var getFormView = async function(idForm){
    //Vista de Formulario (Respuestas)
    var response = await Comentary.findById(idForm).catch(err=> console.log(err));;
    console.log(response);
    return response;
}

var getFormList = async function(idClase){
    //Lista de forms
    var response = await form.find({clase :idClase}).catch(err=> console.log(err));;
    console.log(response);
    return response;
}
module.exports.createForm = createForm;
module.exports.answerForm = answerForm;
module.exports.getFormView = getFormView;
module.exports.getFormList = getFormList;