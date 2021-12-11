const express = require("express")
const router = express.Router();
const {Answer,Question,Sesion} = require("../Esquemas/Interaccion/interaction");
const { verEstadisticas } = require("../Controllers/estadisticas");
const User = require('../Esquemas/Gestion/gUser');
const { terminarSala } = require("../Controllers/Sala");
router.get('/sesion/:salaToken', async (req,res)=>{
    const salaToken = req.params.salaToken;
    const sesions = await Sesion.findOne({salaToken});
    res.json(sesions);
});
router.post('/sesion',async (req,res)=>{
    const {idUser,title} = req.body;
    const user = await User.findOne({codigo:idUser})
    const salaToken = Math.floor(1000000000000000 + Math.random() * 9000000000000000).toString(36).substring(0, 10)
    const sesion = new Sesion({user,title,salaToken});
    await sesion.save();
    console.log(sesion);
    res.json({salaToken});
});
router.get('/question',async (req,res)=>{
    const question = await Question.find();
    res.json(question);
})
router.get('/questions/:salaToken', async (req,res) =>{
    const salaToken = req.params.salaToken;
    const sesion = await Sesion.findOne({salaToken});
    console.log(sesion,"XD");
    res.json(sesion.questions);
})
router.get('/lastquestion/:salaToken', async (req,res)=>{
    const salaToken = req.params.salaToken;
    const sesion = await Sesion.findOne({salaToken}).populate('questions');
    //console.log(sesion);
    const questions = sesion.questions;

    res.json(questions[questions.length-1]);

})
router.get('/question/:id_question', async (req,res)=>{
    const idQuestion = req.params.id_question;
    const question = await Question.findById(idQuestion);
    res.json(question);
}) 
router.post('/question/:id_sesion',async (req,res)=>{
    const idSesion = req.params.id_sesion;
    const {content,type,options} = req.body;
    const question = new Question({
        content,type,options,sesion:idSesion
    });
    const sesion = await Sesion.findByIdAndUpdate(idSesion,{$push : {questions:question}});
    await question.save();
    await sesion.save();
    res.send(question);
});
router.post('/answer/:id_question',async (req,res)=>{
    const question_id = req.params.id_question;
    const {content}=req.body;    
    const answer = new Answer({
        question:question_id,content
    });
    const question = await Question.findByIdAndUpdate(question_id,{$push : {answers:answer}});
    await answer.save();
    await question.save();
    const ans = await Answer.find({question});
    res.send(ans);
});
router.get('/answer',async (req, res)=>{
    const answers = await Answer.find();
    
    res.json(answers);
});
router.get('/QA/:id_question',async (req, res) =>{
    const idQuestion = req.params.id_question;
    const question =  await Question.findById(idQuestion);
    const answers = await Answer.find({question:idQuestion}).populate('user',['codigo','nombre','apellido']);
    console.log(answers[answers.length-1]);
    res.json({question,answers});
});
router.get('/estadisticas/:idSesion',async (req,res) =>{
    const idSesion = req.params.idSesion;
    const estadisticas = await verEstadisticas(idSesion);
    //console.log(estadisticas);
    res.json(estadisticas);
})
router.get('/sesionUser/:idUser', async(req,res)=>{
    const idUser = req.params.idUser;
    const user = await User.findOne({codigo:idUser});
    const sala = user.sala;
    res.json({sala});
})
router.put('/sesionUser/:idUser', async(req,res)=>{
    const idUser = req.params.idUser;
    const {salaToken} = req.body;
    const user = await User.findOneAndUpdate({codigo:idUser},{sala:salaToken});
    const sala = user.sala;
    res.json({sala});
})
router.put('/endSesion/',async (req,res)=>{
    const {salaToken} = req.body;
    const sesion = await terminarSala(salaToken);
    const {fin} = sesion;
    console.log(fin); 
    res.json({fin});
})
module.exports = router;