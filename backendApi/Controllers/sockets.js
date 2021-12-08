const {Sesion,Question,Answer} = require('../Esquemas/Interaccion/interaction');
const User =require('../Esquemas/Gestion/gUser');
const PreguntasSesion = async (idSesion)=>{
    const sesion = await Sesion.findById(idSesion);
    console.log(sesion.questions)
    return sesion.questions;
}
const newQuestion = async (data,idSesion) =>{
    //const {content,tipo,options,file,acertada} = data;
    const question = new Question({
       content: data.content,
       tipo : data.tipo,
       options: data.options,
       sesion :idSesion
    });
    const sesion = await Sesion.findByIdAndUpdate(idSesion,{$push : {questions:question}});
    await question.save();
    await sesion.save();
    return question;
}
const newAnswer = async (data,idQuestion) =>{
    
    try{
        const user = await User.find({codigo:data.user}).exec(); 
        const answer = new Answer({
            question: idQuestion,
            user:user._id,
            content : data.content
        });
        const question = await Question.findByIdAndUpdate(idQuestion,{$push : {answers:answer}});
        await answer.save();
        await question.save();
        return answer;
    }
    catch (error){
        console.log('error',error)
    }
}
module.exports = {
    PreguntasSesion,
    newQuestion,
    newAnswer
}