var form = require('../../Esquemas/Retroalimentacion/scFormularios');
var resForm = require('../../Esquemas/Retroalimentacion/scRespuestaForm');
var user = require('../../Esquemas/Gestion/gUser');

var createForm = async function (formu,idClase){
    formu.clase = idClase;
    formu.respondidos = 0;
    form.create(formu);
    return("Done");
}

var answerForm = async function(formId,userCod,answers){
    const userQ = await user.findOne({codigo : userCod}).exec().catch(e=>console.log(e));
    const resFormCreate = {  
        Alumno : userQ._id,
        formOrigen: formId,  
        respuestas: answers
        };
    console.log(resFormCreate);
    resForm.create( resFormCreate );
    const formQ = await form.findById(formId);
    if (formQ){
        const total = formQ.respondidos ;
        for (let i = 0;i<formQ.preguntas.length;i++){
            for(let j = 0;j<formQ.preguntas[i].alternativas.length;j++){
                const per = formQ.preguntas[i].alternativas[j].percent;
                let cont = per*total;
                if (j == answers[i]){
                    cont = cont+1;
                }
                formQ.preguntas[i].alternativas[j].percent = cont/(total+1);
            }
        }
        formQ.respondidos = total+1;
        formQ.save();
    }
    return("Done");
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