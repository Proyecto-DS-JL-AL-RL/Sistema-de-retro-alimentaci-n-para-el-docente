const User = require('../Esquemas/Gestion/gUser');
const {Sesion,Answer} = require('../Esquemas/Interaccion/interaction');
const { mensajeError } = require('./funcionesUtiles');
const unirseSala = async (idUser,salaToken) =>{

}
const actualizarSala = async(title,salaToken) =>{
    
    const sesion = await Sesion.findOneAndUpdate({salaToken:salaToken},{title:title});
    sesion.save();

}
const terminarSala = async (salaToken) =>{
    const sesion=await Sesion.findOneAndUpdate({salaToken:salaToken},{fin: new Date()});
    await sesion.save();
    console.log(sesion);
    return sesion;
}
const crearSala = async (codigo,nombreSala)=>{
    const token = Math.random().toString().substring(2);
    console.log(token);
    console.log(codigo,nombreSala);
}
const preguntaWithAnswers = async(salaToken,idUser)=>{
    const sesion = await Sesion.findOne({salaToken})
    .populate({
        path:'questions',
        populate:{
            path:'answers',
            populate:{
                path:'user'
            }
        }
            
    });
    const user = await User.findOne({codigo:idUser});
    //const ans = await Answer.find({user,sesion});
    if(!sesion) return mensajeError('No se encontro la sala');
    const validQuestions = sesion.questions.map((question)=>{
        for(let i=0;i<question.answers.length;i++){
            if(question.answers[i].user.equals(user)) {
                return {
                    id:question.id,
                    valid: true}
            };
        }
        return {
            id:question.id,
            valid:false};
    });
    return validQuestions;    
}
const cambiarCurso = async (salaToken,idCurso)=>{
    const sala = await Sesion.findOneAndUpdate({salaToken},{curso:idCurso});
    if(salaToken) return true;
    return mensajeError('Error en la sala');
}
module.exports = {
    unirseSala,
    crearSala,actualizarSala,terminarSala,
    preguntaWithAnswers,cambiarCurso
}