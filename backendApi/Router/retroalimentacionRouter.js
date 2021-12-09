
var retClasses = require('../Datos/Retroalimentacion/RetClasses');
var retComentario = require('../Datos/Retroalimentacion/RetComentarios');
var RetForm = require("../Datos/Retroalimentacion/RetForms");
const express = require("express")
const router = express.Router();



router.get('/getClass/:idClass',async function(req,res){
        let resp = await retClasses.getClass(req.params.idClass);
        res.send(resp);
});

router.get('/getListClass/:idCourse',async function(req,res){
    let resp = await retClasses.getListClass(req.params.idCourse);
    res.send(resp);
});

router.post('/createClass/:idCourse',async function(req,res){
    let resp = await retClasses.createClass(req.params.idCourse,req);
    res.send(resp);
});
/*
router.get('/getClass/:idClass',async function(req,res){
    let resp = await retClasses.getClass();
    res.send(resp);
});

*/
router.get('/getFormList/:idClase',async function(req,res){
    let resp = await RetForm.getFormList(req.params.idClase);
    res.send(resp);
});
router.get('/getFormView/:idForm',async function(req,res){
    let resp = await RetForm.getFormView(req.params.idForm);
    res.send(resp);
})
router.post('/createForm/:idClase',async function(req,res){
    let resp = await RetForm.createForm(req.body,req.params.idClase);
    res.send(resp);
});

router.post('/createCommentary',async function(req,res){
    let resp = await retComentario.createCommentary(req.body);
    res.send(resp);
});


router.get('/getComentaryView/:idComentary',async function(req,res){
    let resp = await retComentario.getCommentaryView(req.params.idComentary);
    res.send(resp);
});
router.get('/getComentaryList/:idClass/:param',async function(req,res){
    let resp = await retComentario.getCommentaryList(req.params.idClass,req.params.param);
    res.send(resp);
});

module.exports = router;

