//app.get('/algo', function Lo de datos);});
//Importa lo de Datos
const express = require("express")
const router = express.Router();

var {createCurso, fidnCurso, updateCurso, deleteCurso } = require('../Datos/Gestion/gCurso')
var {createUser, findUser, updateUser, deleteUser} = require('../Datos/Gestion/gUser')
var {crearNota, findNota, updateNota, deleteNota} = require('../Datos/Gestion/gNota');

router.post('/user', async (req,res)=>{
    const usr = await findUser(req.body);
    res.json(usr);
});

router.post('/user/:id/update', async (req,res)=>{
    const usr = await updateUser(req.body[0],req.body[1]);
    res.json(usr);
});

router.delete('/user/:iduser', async (req,res)=>{
    res.send( `Se ha eliminado el user ${req.params.iduser}`)
    await deleteUser(req.params.iduser.toString());
});

module.exports = router;