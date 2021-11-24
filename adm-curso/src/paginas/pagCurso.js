import React from 'react'
import {Link,BrowserRouter as Router,
    Route,Switch} from 'react-router-dom';
import CrearPregunta from '../componentes/Visualizacion/mouduloInteraccion/CrearPregunta';


import CrearClase  from '../componentes/moduloRetroalimentacion/crearClase';
import ComentarioForm from '../componentes/moduloRetroalimentacion/ComentarioForm';
import FormVista from '../componentes/moduloRetroalimentacion/formularioVista';
import PuntuarClase from '../componentes/moduloRetroalimentacion/PuntuarClase';
import CrearFormP from '../componentes/moduloRetroalimentacion/CrearFormP';
import CrearFormulario from '../componentes/moduloRetroalimentacion/CrearFormulario';
import ListaComentario from '../componentes/moduloRetroalimentacion/ListaComentarios';
import Header from '../componentes/Header';
import Principal from '../paginas/Principal'
import SelectedListItem  from '../componentes/componentesBasicos/MenuCurso';
import VerEstadisticas from '../componentes/Visualizacion/mouduloInteraccion/VerEstadisticas/VerEstadisticas';
import VerRespuesta from '../componentes/Visualizacion/mouduloInteraccion/VerRespuesta/VerRespuesta';
import ResumenEstadisticas from '../componentes/moduloRetroalimentacion/ResumenEstadisticas';
import StatsGenerales from '../componentes/moduloRetroalimentacion/StatsGenerales';
import ListaForms from '../componentes/moduloRetroalimentacion/listaForms';
import Comentario from '../componentes/moduloRetroalimentacion/Comentario';
import Body from '../componentes/Body';
import ListaClases from '../componentes/moduloRetroalimentacion/ListaClases';
import { useParams } from 'react-router';
import test  from '../componentes/clases/clases.js';
import SelectedListAvatar from '../componentes/componentesBasicos/MenuAvatar.js';
import VerPerfil from '../componentes/Perfil';
import './pagCurso.css';

export default function PagCurso() {
    const [PCstate,setPCstate] = React.useState(0);
    const [PCvista,setVista] = React.useState(0); // 0 = Profesor, 1 = Alumno
    const [idCurso,setIdCurso] = React.useState(useParams().id);
    const curso = test['cursos']
    const switchMobil = function(){
        if (PCstate == 0){
            return <div>
                    <div className= 'statMblWindowContainer'><Body/></div>
            </div>
        }else if (PCstate == 1){
            return <div className = 'pagMblListaAlumnos'><ListaClases idCurso = {idCurso}/></div>
        }
    }
    
    const buttonMbl = function(){
            return (
                <div className ='PClaseBtnContainers'>
                        <button className = 'PCbtnChange2' onClick = {()=>{setPCstate(0)}}> General </button>
                        <button className = 'PCbtnChange2' onClick = {()=>{setPCstate(1)}}> Clases </button>
                </div>
            )
        
    }

    const buttonWindow = function(){
        return (
            <div className ='WindowBtnContainers'>
                    <button className = 'WindowbtnChange2' onClick = {()=>{setPCstate(0)}}> General </button>
                    <button className = 'WindowbtnChange2' onClick = {()=>{setPCstate(1)}}> Clases </button>
            </div>
        )
    
}

    
    return (        
        <div>           

            {Math.min(window.innerHeight,window.innerWidth)<600?
                <div>                    
                    {switchMobil()}
                    {buttonMbl()}
                </div>
            :
                <div>
                    {!PCstate?
                    <div className= 'mainWindowContainer'><Body/></div>
                    :
                    <div className = 'mainWindowContainer'><ListaClases idCurso = {idCurso}/></div>
                    }
                    {buttonWindow()}
                </div>
            }            
            <Header NameCurso={curso[idCurso-1].nombre_curso} componenteMenu={<SelectedListItem Back={<Principal/>}/>} componentes={<SelectedListAvatar curso_id={idCurso}   perfil={<VerPerfil/>}/>}/>
        </div>
    );
}
