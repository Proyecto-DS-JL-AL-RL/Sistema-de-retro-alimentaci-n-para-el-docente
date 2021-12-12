import React from 'react'
import Header from '../componentes/Header';

import { useEffect } from 'react';
import axios from 'axios';
import Body from '../componentes/Body';
import ListaClases from '../componentes/moduloRetroalimentacion/ListaClases';
import { useParams } from 'react-router';
import test  from '../componentes/clases/clases.js';
import SelectedListAvatar from '../componentes/componentesBasicos/MenuAvatar.js';
import VerPerfil from '../componentes/Perfil';
import './pagCurso.css';import SelectedListItem from '../componentes/componentesBasicos/MenuCurso';

import Principal from './Principal';
import { useStore } from 'react-redux';
import {setHeaderContent,setIdCourse } from '../feature/sessionSlice';

export default function PagCurso(props) {
    const [PCstate,setPCstate] = React.useState(0);
    const [PCvista,setVista] = React.useState(0); // 0 = Profesor, 1 = Alumno
    const [nameCursp,setNameCurso] = React.useState('');
    const [idCurso,setIdCurso] = React.useState(useParams().id);
    const curso = test['cursos']

    const store = useStore();
    useEffect(()=>{
        axios.post('/curso/search', {codigo:idCurso}).then((response) => {
        let body = response.data;
        store.dispatch(setHeaderContent(body[0].nombre));
        store.dispatch(setIdCourse(idCurso));
        //setNameCurso(body[0].nombre)
        }) 
    },[])
    const switchMobil = function(){
        if (PCstate === 0){
            return <div>
                    <div className= 'statMblWindowContainer'><Body tipo={props.session.type}/></div>
            </div>
        }else if (PCstate === 1){
            return <div className = 'pagMblListaAlumnos'><ListaClases idCurso = {idCurso} session = {props.session}/></div>
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
                    <div className = 'mainWindowContainer'><ListaClases idCurso = {idCurso} session = {props.session}/></div>
                    }
                    {buttonWindow()}
                </div>
            }            
        </div>
    );
}
