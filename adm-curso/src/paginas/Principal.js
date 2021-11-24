import React, { useEffect } from 'react'
import {Link,BrowserRouter as Router,
    Route,Switch} from 'react-router-dom';
import CrearPregunta from '../componentes/Visualizacion/mouduloInteraccion/CrearPregunta';


import VerCurso from '../componentes/Curso'
import VerPerfil from '../componentes/Perfil';
import Inicio from '../componentes/Inicio'
import VerNotas  from  '../componentes/Notas'



import VerEstadisticas from '../componentes/Visualizacion/mouduloInteraccion/VerEstadisticas/VerEstadisticas';
import VerRespuesta from '../componentes/Visualizacion/mouduloInteraccion/VerRespuesta/VerRespuesta';
import Header from '../componentes/Header';
import ModuloInteraccion from './Interaccion/ModuloInteraccion.js';
import PagClase from './pagClase';
import { useState } from 'react';
import Login from './Login';
import axios from 'axios';

export default function Principal() {
    const [logged,setLogged] = useState(false);
    const [session,setSession] = useState({logged:false});

    const initSession = function(){
        axios.get('/login/getSession').then(function(response){
            console.log(response.data);
            setSession(response.data);
            if(response.data.logged != null) setLogged(response.data.logged);
        });   
    };
    const handleLogout = function (){
        axios.get('/login/endSession').then(()=>{
            initSession();
            //console.log(logged);
        });        
    };

    useEffect(()=>{
        initSession();
    },[]);

    return (
        <div>
            {!logged? 
            <Login initSession = {initSession}/>
            :
            <Router>

                <ModuloInteraccion/>
     
                <Switch>
                    <Route exact path="/">
                        <Inicio/>
                        <Header NameCurso={'Cursos'}/>
                    </Route>
                    <Route path="/VerRespuesta">
                        <VerRespuesta/>
                        <Header NameCurso={'Respuesta'}/>
                    </Route>
                    <Route path="/CrearPregunta">
                        <CrearPregunta/>
                        <Header NameCurso={'Crear Pregunta'}/>
                    </Route>                    

                    <Route path="/VerEstadisticas">
                        <VerEstadisticas/>
                        <Header NameCurso={'Estadisticas'}/>
                    </Route>
                    <Route path="/VerPerfil">
                        <VerPerfil/>
                    </Route>
                    <Route path = '/VerCurso/:id' component = {VerCurso} >
                        <VerCurso session = {session}/>
                    </Route>
                    <Route path='/VerNotas/:nota' component = {VerNotas}>
                        <VerNotas/>
                    </Route>
                    <Route path = '/Clase/:idCurso/:idClase' component = {PagClase}>
                        <PagClase session = {session}/>
                    </Route>
                </Switch>          
                <div>{session.type} {session.user}</div>     
                <button onClick = {handleLogout}>LOOGOUT</button>
            </Router>            
            }
        </div>
    )
}
