
const express = require("express")
const router = express.Router();
const userSession = require('../Datos/userSession');



router.post('/checkLogin',async function(req,res){
        res.send(await userSession.checkUser(req.body.username,req.body.password));
});

router.get('/register/:codigo/:password',async function(req,res){
        await userSession.savePassword(req.params.codigo,req.params.password);
        res.send('Response');
});

router.get('/register/:codigo/:password'),async function(req,res){
        res.send("notImplenetedYet");
}



module.exports = router;

