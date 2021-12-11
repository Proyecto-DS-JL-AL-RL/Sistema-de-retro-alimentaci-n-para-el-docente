const User = require('../Esquemas/Gestion/gUser');
const {Sesion} = require('../Esquemas/Interaccion/interaction');
const unirseSala = async (idUser,salaToken) =>{

}
const actualizarSala = async(title,salaToken) =>{
    
    const sesion = await Sesion.findOneAndUpdate({salaToken:salaToken},{title:title});
    sesion.save();

}
const terminarSala = async (salaToken) =>{
    const sesion=await Sesion.findOneAndUpdate({salaToken:salaToken},{fin: new Date()});
    await sesion.save();
    console.log(sesion);
    return sesion;
}
const crearSala = async (codigo,nombreSala)=>{
    const token = Math.random().toString().substring(2);
    console.log(token);
    console.log(codigo,nombreSala);
}
module.exports = {
    unirseSala,
    crearSala,actualizarSala,terminarSala
}