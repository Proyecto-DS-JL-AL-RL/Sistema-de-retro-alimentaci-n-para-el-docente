
var retClasses = require('../Datos/Retroalimentacion/RetClasses');
var retComentario = require('../Datos/Retroalimentacion/RetComentarios');
var RetForm = require("../Datos/Retroalimentacion/RetForms");


var init =  function(app){
    app.get('/retroalimentacion/getClass/:idClass',async function(req,res){
        let resp = await retClasses.getClass();
        res.send(resp);
    });
    /*app.get('/retroalimentacion/getClass/:idClass',async function(req,res){
        let resp = await retClasses.getClass();
        res.send(resp);
    });
    app.get('/retroalimentacion/getClass/:idClass',async function(req,res){
        let resp = await retClasses.getClass();
        res.send(resp);
    });
    app.get('/retroalimentacion/getClass/:idClass',async function(req,res){
        let resp = await retClasses.getClass();
        res.send(resp);
    });
    app.get('/retroalimentacion/getClass/:idClass',async function(req,res){
        let resp = await retClasses.getClass();
        res.send(resp);
    });
    */

}

module.exports = init;

