const {Sesion,Question,Answer} = require('../Esquemas/Interaccion/interaction');
const User =require('../Esquemas/Gestion/gUser');
const PreguntasSesion = async (idSesion)=>{
    const sesion = await Sesion.findById(idSesion);
    console.log(sesion.questions)
    return sesion.questions;
}

const newQuestion = async (data,userCod,salaToken) =>{
    //const {content,tipo,options,file,acertada} = data;
    
    //console.log(userCod);
    const user = await User.findOne({codigo:userCod});
    const sala = await Sesion.findOne({salaToken});
    //console.log(sala);
    const question = new Question({
       content: data.content,
       tipo : data.tipo,
       options: data.options,
       correct:data.correct? data.correct: '',
       sesion :sala,
       user
    });
    const sesion = await Sesion.findByIdAndUpdate(sala,{$push : {questions:question}});
    await question.save();
    await sesion.save();
    
    return question;
}
const newAnswer = async (data,idQuestion) =>{
    
    try{
        const user = await User.find({codigo:data.user}).exec(); 
        const exist = await Answer.find({user:user[0]._id,question:idQuestion});
        /*if(exist){
            
            return false;
        }else{
            console.log("No");
        }*/
        
        const answer = new Answer({
            question: idQuestion,
            user:user[0],
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
    }
}
module.exports = {
    PreguntasSesion,
    newQuestion,
    newAnswer
}