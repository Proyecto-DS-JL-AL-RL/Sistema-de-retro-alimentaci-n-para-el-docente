const express = require("express")
const router = express.Router();
const {Answer,Question,Sesion} = require("../Esquemas/Interaccion/interaction");

router.get('/sesion', async (req,res)=>{
    
    const sesions = await Sesion.find();
    res.send(sesions);
});
router.post('/sesion',async (req,res)=>{
    const {title} = req.body;
    const sesion = new Sesion({title:title});
    await sesion.save();
    res.json(sesion);
});
router.get('/question',async (req,res)=>{
    const question = await Question.find();
    res.json(question);
})
router.get('/questions/:id_sesion', async (req,res) =>{
    const idSesion = req.params.id_sesion;
    const sesion = await Sesion.findById(idSesion);
    res.json(sesion.questions);
})
router.get('/lastquestion/:id_sesion', async (req,res)=>{
    const idSesion = req.params.id_sesion;
    const sesion = await Sesion.findById(idSesion).populate('questions');
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
    const question =  await Question.findById(idQuestion).populate('answers');
    res.json(question);
});
module.exports = router;