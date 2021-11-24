
const express = require("express")
const router = express.Router();
const userSession = require('../Datos/userSession');



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



module.exports = router;

