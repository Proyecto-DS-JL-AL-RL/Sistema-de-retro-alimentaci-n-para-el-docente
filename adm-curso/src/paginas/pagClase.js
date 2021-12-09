import React from 'react'

import ListaComentario from '../componentes/moduloRetroalimentacion/ListaComentarios';
import Header from '../componentes/Header';
import SelectedListItem from '../componentes/componentesBasicos/MenuCurso';
import Principal from './Principal';
import SelectedListIncio from '../componentes/componentesBasicos/MenuInicio';
import VerPerfil from '../componentes/Perfil';
import { useEffect } from 'react';
import { useParams } from 'react-router';

import ResumenEstadisticas from '../componentes/moduloRetroalimentacion/ResumenEstadisticas';
import StatsGenerales from '../componentes/moduloRetroalimentacion/StatsGenerales';
import ListaForms from '../componentes/moduloRetroalimentacion/listaForms';
import axios from 'axios';

import './pagClase.css';
import test from '../componentes/clases/clases';
import {useStore} from 'react-redux';

export default function PagClase(props) {
    const [PCstate,setPCstate] = React.useState(0);
    const [PCvista,setVista] = React.useState(0); // 0 = Profesor, 1 = Alumno
    const [idClase,setIdClase] = React.useState(useParams().idClase);
    const [clase,setClase] = React.useState({titulo : ''});

    
    const store = useStore();
    //session = asdparams.session
    const session = useStore().getState().session;
    //store = useStore()

    useEffect(()=>{
        //store.getState().session; 
        console.log(store.getState());

        if (session){
            if(session.type== "Profesor"){
                setVista(0);
            }else if (session.type == "Alumno"){
                setVista(1);
            }
        }
        axios.get('/retAl/getClass/'+String(idClase)).then(function(response){
            //console.log(response.data);
            setClase(response.data);
        });
    },[])
    const switchMobil = function(){
        if (PCstate === 0){
            return <div>
                {!PCvista?
                    <div className= 'statMblWindowContainer'><StatsGenerales/></div>
                    :
                    <div className = 'statMblWindowContainer'><ResumenEstadisticas vista = {PCvista} idAlumno = {0}/></div>
                }

            </div>
        }else if (PCstate === 1){
            return <div className = 'pagMblListaAlumnos'><ListaComentario clase = {idClase} session = {props.session}/></div>
        }else if (PCstate === 2){
            return <div className = 'pagMblListaForms'><ListaForms clase = {idClase} session = {props.session}/></div>
        }
    }
    
    const buttonMbl = function(){
        if (!PCvista){
            return (
                <div className ='PClaseBtnContainers'>
                        <button className = 'PCbtnChange3' onClick = {()=>{setPCstate(0);console.log(PCstate)}}> Estadisticas </button>
                        <button className = 'PCbtnChange3' onClick = {()=>{setPCstate(1);console.log(PCstate)}}> Comentarios </button>
                        <button className = 'PCbtnChange3' onClick = {()=>{setPCstate(2);console.log(PCstate)}}> Formularios </button>
                </div>
            )
        }else{
            return (
                <div className ='PClaseBtnContainers'>
                        <button className = 'PCbtnChange2' onClick = {()=>{setPCstate(0);console.log(PCstate)}}> Estadisticas </button>
                        <button className = 'PCbtnChange2' onClick = {()=>{setPCstate(2);console.log(PCstate)}}> Formularios </button>
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
                    <div className = 'titleMobile'>{clase.titulo}</div>
                </div>
            :
                <div>
                    <div className = 'titleEsc'>{clase.titulo}</div>
                    {!PCvista?
                    <div className= 'statWindowContainer'><StatsGenerales/></div>
                    :
                    <div className = 'statWindowContainer'><ResumenEstadisticas vista = {PCvista} idAlumno = {0}/></div>
                    }
                    <div className = 'pagListaAlumnos'>
                        <ListaComentario clase = {idClase} session = {props.session}/>
                    </div>
                    <div className = 'pagListaForms'><ListaForms clase = {idClase} session = {props.session}/></div>
                    <div className = 'titleEsc'>{clase.titulo}</div>
                </div>
            }            
            <Header componenteMenu={<SelectedListItem Back={<Principal/>}/>} componentes={<SelectedListIncio  perfil={<VerPerfil/>}/>}/>
        </div>
    );
}
