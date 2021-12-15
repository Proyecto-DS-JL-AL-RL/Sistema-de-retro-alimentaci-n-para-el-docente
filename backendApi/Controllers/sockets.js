const {Sesion,Question,Answer} = require('../Esquemas/Interaccion/interaction');
const User =require('../Esquemas/Gestion/gUser');
const {mensajeError} = require('./funcionesUtiles');
const PreguntasSesion = async (idSesion)=>{
    const sesion = await Sesion.findById(idSesion);
    console.log(sesion.questions)
    return sesion.questions;
}

const newQuestion = async (data,userCod,salaToken) =>{
    //const {content,tipo,options,file,acertada} = data;
    
    //console.log(userCod);
    const user = await User.findOne({codigo:userCod});
    
    if(!user) return mensajeError('Problemas el usuario')
    const sala = await Sesion.findOne({salaToken,user});
    //console.log(sala);
    if(!sala) return mensajeError('Problemas con la verifición de la sala');
    const question = new Question({
       content: data.content,
       tipo : data.tipo,
       options: data.options,
       correct:data.correct? data.correct: '',
       sesion :sala,
       user
    });
    if(!question) return {error:true,mensaje: 'Problemas con la creación de pregunta'};
    const sesion = await Sesion.findByIdAndUpdate(sala,{$push : {questions:question}});
    await question.save();
    await sesion.save();
    
    return question;
}
const newAnswer = async (data,idQuestion) =>{
    
    try{
        const user = await User.findOne({codigo:data.user});
        
        if(!user) return mensajeError('Problemas con el usuario');
        console.log(user);
        const exist = await Answer.findOne({user:user._id,question:idQuestion});
        if(exist) return mensajeError('Ya se respondio la pregunta');
        /*if(exist){
            
            return false;
        }else{
            console.log("No");
        }*/
        
        const answer = new Answer({
            question: idQuestion,
            user:user,
            content : data.content
        });
        const question = await Question.findByIdAndUpdate(idQuestion,{$push : {answers:answer}});
        await answer.save();
        await question.save();
        const ans = await answer.populate('user',['codigo','nombre','apellido']);
        
        return ans;
    }
    catch (error){
        console.log('error',error)
        return mensajeError('Error desconocido');
    }
}
const comprobarPregunta = async (codigo,idQuestion)=>{
    const user = await User.findOne({codigo});
    if(!user) return mensajeError('Problemas con el usuario').error;
    const answer = await Answer.findOne({question:idQuestion,user});
    return answer? true:false;
}
module.exports = {
    PreguntasSesion,
    newQuestion,
    newAnswer,
    comprobarPregunta
}