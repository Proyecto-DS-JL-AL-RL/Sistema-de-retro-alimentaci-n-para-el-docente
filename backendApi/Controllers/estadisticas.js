const {Sesion} = require('../Esquemas/Interaccion/interaction');
const verEstadisticas = async(idSesion) =>{
    const sesion = await Sesion.findById(idSesion).populate('questions').populate({
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
    
    const questions = sesion.questions;
    const respuestasPorPregunta = questions.map(e=>{
        return e.answers.length;
    })
    const answersSesion = questions.map(e=>{
        return e.answers;
    })
    //console.log(answersSesion,sesion.questions[questions.length-1].answers);
    return {respuestasPorPregunta};
}
module.exports = {
    verEstadisticas
}