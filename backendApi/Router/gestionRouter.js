//app.get('/algo', function Lo de datos);});
//Importa lo de Datos
const express = require("express")
const router = express.Router();

var {createCurso, findCurso, updateCurso, deleteCurso } = require('../Datos/Gestion/gCurso')
var {createUser, findUser, updateUser, deleteUser} = require('../Datos/Gestion/gUser')
var {crearNota, findNota, updateNota, deleteNota} = require('../Datos/Gestion/gNota');

router.post('/user/search', async (req,res)=>{
    const usr = await findUser(req.body);
    return res.json(usr);
});

router.post('/user/:id/update', async (req,res)=>{
    const usr = await updateUser(req.body[0],req.body[1]);
    res.json(usr);
});

router.delete('/user/:iduser/delete', async (req,res)=>{
    await deleteUser(req.params.iduser.toString());
    res.send('Se elimino un alumno')
});

router.post('/user/create', async (req,res)=>{
    await createUser(req.body);
    res.send('Se agrego un nuevo usuario')
})

router.post('/curso/search', async (req,res)=>{
    const curso = await findCurso(req.body);
    res.json(curso);
});

router.post('/curso/:id/update', async (req,res)=>{
    const usr = await updateCurso(req.body[0],req.body[1]);
    res.json(usr);
});

router.delete('/curso/:idcurso/delete', async (req,res)=>{
    await deleteCurso(req.params.idcurso.toString());
    res.send('Se eliminó un curso')
});

router.post('/curso/create', async (req,res)=>{
    await createCurso(req.body);
    res.send('Se agrego un nuevo curso')
})


router.post('/nota/search', async (req,res)=>{
    const nota = await findNota(req.body);
    res.json(nota);
});

router.post('/nota/:id/update', async (req,res)=>{
    const nota = await updateNota(req.body[0], req.body[1]);
    res.json(nota);
});

router.delete('/curso/:idcurso/delete', async (req,res)=>{
    await deleteNota(req.params.idcurso.toString());
    res.send('Se eliminó una nota')
});

router.post('/nota/create', async (req,res)=>{
    await crearNota(req.body);
    res.send('Se creo una nueva nota')
})


module.exports = router;