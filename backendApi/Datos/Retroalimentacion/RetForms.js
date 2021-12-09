var form = require('../../Esquemas/Retroalimentacion/scFormularios');
var resForm = require('../../Esquemas/Retroalimentacion/scRespuestaForm');


var createForm = async function (formu,idClase){
    formu.clase = idClase;
    formu.respondidos = 0;
    form.create(formu);
    return("Done");
}

var answerForm = async function(form,answers){
    //Respuesta de a form
    return("xd");
}

var getFormView = async function(idForm){
    //Vista de Formulario (Respuestas)
    var response = await form.findById(idForm).exec().catch(err=> console.log(err));;
    //console.log(response);
    return response;
}

var getFormList = async function(idClase){
    //Lista de forms
    var forms = await form.find({clase :idClase}).exec().catch(err=> console.log(err));
    response = [];
    if (forms){
        for (formit in forms){
            //console.log(forms[formit]);
            response.push({titulo: forms[formit].titulo, formId : forms[formit]._id, respondidos: forms[formit].respondidos})
        }
    }
    //console.log(response);
    return response;
}
module.exports.createForm = createForm;
module.exports.answerForm = answerForm;
module.exports.getFormView = getFormView;
module.exports.getFormList = getFormList;