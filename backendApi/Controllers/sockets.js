const {Sesion,Question} = require('../Esquemas/Interaccion/interaction');
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
module.exports = {
    PreguntasSesion,
    newQuestion
}