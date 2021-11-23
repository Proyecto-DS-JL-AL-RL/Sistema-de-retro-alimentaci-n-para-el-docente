
var retClasses = require('../Datos/Retroalimentacion/RetClasses');
var retComentario = require('../Datos/Retroalimentacion/RetComentarios');
var RetForm = require("../Datos/Retroalimentacion/RetForms");
const express = require("express")
const router = express.Router();
var {Alumno,Curso} = require('../Esquemas/Retroalimentacion/prueba');


router.get('/getClass/:idClass',async function(req,res){
        let resp = await retClasses.getClass(req.params.idClass);
        res.send(resp);
});

router.get('/getListClass/:idCourse',async function(req,res){
    let resp = await retClasses.getListClass(req.params.idCourse);
    res.send(resp);
});
/*
router.get('/getClass/:idClass',async function(req,res){
    let resp = await retClasses.getClass();
    res.send(resp);
});

router.get('/getClass/:idClass',async function(req,res){
    let resp = await retClasses.getClass();
    res.send(resp);
});

*/

router.get('/getComentaryView/:idComentary',async function(req,res){
    let resp = await retComentario.getCommentaryView(req.params.idComentary);
    res.send(resp);
});
router.get('/getComentaryList/:idClass',async function(req,res){
    let resp = await retComentario.getCommentaryList(req.params.idClass);
    res.send(resp);
});

module.exports = router;

