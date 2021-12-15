
const express = require("express")
const router = express.Router();
const userSession = require('../Datos/userSession');


/////   /login/checklogin
router.post('/checkLogin',async function(req,res){
        res.send(await userSession.checkUser(req.body.username,req.body.password,req));
});

router.get('/register/:codigo/:password',async function(req,res){
        await userSession.savePassword(req.params.codigo,req.params.password);
        res.send('Response');
});


router.get('/endSession',async function(req,res){
        res.send(await userSession.endSession(req));
});

router.get('/getSession',async function(req,res){
        res.send(await userSession.getSession(req));
});

router.post('/register',async function(req,res){
        res.send(await userSession.registerUser(req.body.user,req.body.password));
});

router.post('/setCourse',async function(req,res){
        res.send(await userSession.setCourse(req,req.body.idCur));
});


module.exports = router;

