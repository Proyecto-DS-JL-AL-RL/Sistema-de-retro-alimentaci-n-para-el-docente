const {Sesion} = require('../Esquemas/Interaccion/interaction');
const arrayEstado = ['Ausentes','NecesitaAyuda', 'Activo', 'Pasivo', 'Distraido'];
const {mensajeError} = require('./funcionesUtiles');
function clasificar(totalPregunta,totalRespuestas,erradas,totalDirectas){
    if(totalRespuestas ==0) return 0;
    if((totalDirectas - erradas)/totalDirectas<0.3) return 1;
    let relativo  = totalPregunta/totalRespuestas ;
    if(totalPregunta/totalRespuestas>0.5){
        return 2;
    }
    else if(totalPregunta/totalRespuestas>0.3){
        return 3;
    }
    else if(relativo<=0.3) return 4;
    
}
const verEstadisticas = async(salaToken) =>{
    const sesion = await Sesion.findOne({salaToken:salaToken})
    .populate('questions').populate({
        path:'questions',
        populate:{path:'answers'}
    }).populate({
        path:'questions',
        populate:{
            path:'answers',
            populate:{
                path:'user'
            }
        }
            
    });
    console.log(sesion);
    if(!sesion) return mensajeError('Conectese a una sala');
    if(sesion.questions==[])return mensajeError('Espere, aun no hay preguntas');
    /**
     * Por ahora sera una union masiva :V <--->
     */
    
    const questions = sesion.questions;
    const usuarios = questions.map(question =>{
        const userAns = question.answers.map(ans=>{
            return ans.user;
        });
        return userAns;
    })
    const answers = questions.map((question)=>{
        return question.answers;
    }).reduce((prevAns,currentAns)=>{
        return prevAns.concat(currentAns);
    })
    ////Todos los Usuarios 
    const usuariosFinales = usuarios.reduce((prevUsers,currentUsers) =>{
        const newUsers = currentUsers.filter((user) => !prevUsers.includes(user))
        return prevUsers.concat(newUsers);
    })
    let numRespuestas = Array(usuariosFinales.length).fill(0);
    answers.forEach((ans)=>{
        const user = ans.user;
        const index = usuariosFinales.indexOf(user);
        if(index>-1) numRespuestas[index]++
    })
    //Errores///////////////////////////////
    let totalDirectas = 0;
    const answersClose = questions.map((question)=>{
        if(question.correct!=null) totalDirectas++;
        const quesAns = question.answers.map((ans)=>{
            return {correct:question.correct,ans};
        })
        return quesAns
    }).reduce((prevAns,currentAns)=>{
        return prevAns.concat(currentAns);
    })
    let numErrores = Array(usuariosFinales.length).fill(0);
    answersClose.forEach((ansC)=>{
        const {correct,ans} = ansC;
        if(correct!=null){
            const user = ans.user;
            const index = usuariosFinales.indexOf(user);
            if(index>-1) numErrores[index]++;
        }
    })
    ///////////////Estado//////////////////////
    let estadoAlumno = Array(5).fill(0);
    let tablaAlumno = usuariosFinales.map((user,i)=>{
        const num = clasificar(questions.length,numRespuestas[i],numErrores[i],totalDirectas);
        estadoAlumno[num]++;
        return {
            nombre : user.nombre +" " + user.apellido,
            estado : arrayEstado[num],
            respuestas: numRespuestas[i],
            errores : numErrores[i]
        }
    })
    const totalDePreguntas = questions.length;

    const respuestasPorPregunta = questions.map(e=>{
        return e.answers.length;
    })
    
    //console.log(answersSesion,sesion.questions[questions.length-1].answers);
    return {respuestasPorPregunta,estadoAlumno,tablaAlumno};
}
module.exports = {
    verEstadisticas
}