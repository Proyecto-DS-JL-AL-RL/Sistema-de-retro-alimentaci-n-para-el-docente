const mongoose = require('mongoose');
const {Schema} = mongoose;

const AnswerSchema = new Schema({
    question : {type : Schema.Types.ObjectId, ref : 'Question'},
    user:{type:Schema.Types.ObjectId,ref:'User'},
    content : String
});
const QuestionSchema = new Schema({
    content: String,
    tipo: Number,
    options: [],
    correct: String,
    answers : [{type: Schema.Types.ObjectId, ref : 'Answer'}],
    sesion:{type:Schema.Types.ObjectId, ref: 'Sesion'},
})
const SesionSchema = new Schema({
    title: String,
    questions: {type:[{type : Schema.Types.ObjectId, ref:'Question'}],default: []},
    user:{type:Schema.Types.ObjectId,ref:'User'},
    salaToken:String,
    inicio:{type:Date, default: new Date()},
    fin:Date
})
const Question = mongoose.model('Question',QuestionSchema);
const Answer = mongoose.model('Answer',AnswerSchema);
const Sesion = mongoose.model('Sesion',SesionSchema);
module.exports = {Question,Answer,Sesion}


