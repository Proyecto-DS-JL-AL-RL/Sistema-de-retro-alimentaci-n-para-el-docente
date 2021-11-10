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

import VerEstadisticas from '../componentes/Visualizacion/mouduloInteraccion/VerEstadisticas/VerEstadisticas';
import VerRespuesta from '../componentes/Visualizacion/mouduloInteraccion/VerRespuesta/VerRespuesta';
import ResumenEstadisticas from '../componentes/moduloRetroalimentacion/ResumenEstadisticas';
import StatsGenerales from '../componentes/moduloRetroalimentacion/StatsGenerales';
import './pagClase.css';

export default function PagClase() {
    const [PCstate,setPCstate] = React.useState(0);
    const [PCvista,setVista] = React.useState(0); // 0 = Profesor, 1 = Alumno

    const switchMobil = function(){
        if (PCstate == 0){
            return <div>
                {!PCvista?
                    <div className= 'statMblWindowContainer'><StatsGenerales/></div>
                    :
                    <div className = 'statMblWindowContainer'><ResumenEstadisticas vista = {PCvista} idAlumno = {0}/></div>
                }

            </div>
        }else if (PCstate == 1){
            return <div className = 'pagMblListaAlumnos'><ListaComentario/></div>
        }
    }
    const buttonMbl = function(){
        if (!PCvista){
            return (
                <div className ='PClaseBtnContainers'>
                        <button className = 'PCbtnChange3' onClick = {()=>{setPCstate(0);console.log(PCstate)}}> Estadisticas </button>
                        <button className = 'PCbtnChange3' onClick = {()=>{setPCstate(1);console.log(PCstate)}}> Comentarios </button>
                        <button className = 'PCbtnChange3' onClick = {()=>{setPCstate(3);console.log(PCstate)}}> Formularios </button>
                </div>
            )
        }else{
            return (
                <div className ='PClaseBtnContainers'>
                        <button className = 'PCbtnChange2' onClick = {()=>{setPCstate(0);console.log(PCstate)}}> Estadisticas </button>
                        <button className = 'PCbtnChange2' onClick = {()=>{setPCstate(3);console.log(PCstate)}}> Formularios </button>
                </div>
            )
        }
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
                    {!PCvista?
                    <div className= 'statWindowContainer'><StatsGenerales/></div>
                    :
                    <div className = 'statWindowContainer'><ResumenEstadisticas vista = {PCvista} idAlumno = {0}/></div>
                    }
                    <div className = 'pagListaAlumnos'><ListaComentario/></div>
                </div>
            }            
            <Header/>
        </div>
    );
}
