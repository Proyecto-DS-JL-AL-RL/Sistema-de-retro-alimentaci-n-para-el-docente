import React, { useEffect,useContext } from 'react'
import {Link,BrowserRouter as Router,
    Route,Switch} from 'react-router-dom';
import CrearPregunta from '../componentes/Visualizacion/mouduloInteraccion/CrearPregunta';

import SelectedListItem  from '../componentes/componentesBasicos/MenuCurso';

import EditarCurso from '../componentes/EditarCurso';
import VerCurso from '../componentes/Curso'
import VerPerfil from '../componentes/Perfil';
import SubirNota from '../componentes/SubirNota'
import Inicio from '../componentes/Inicio'
import VerNotas  from  '../componentes/Notas'

import VerEstadisticas from '../componentes/Visualizacion/mouduloInteraccion/VerEstadisticas/VerEstadisticas';
import VerRespuesta from '../componentes/Visualizacion/mouduloInteraccion/VerRespuesta/VerRespuesta';
import Header from '../componentes/Header';
import ModuloInteraccion from './Interaccion/ModuloInteraccion.js';
import PagClase from './pagClase';
import { useState } from 'react';
import Login from './Login';
import Registro from './registro';
import axios from 'axios';
import { useStore } from 'react-redux';
import { startSession } from '../feature/sessionSlice';
import './Principal.css'
import { SocketContext } from '../context/SocketContext';

export default function Principal() {
    const [logged,setLogged] = useState(false);
    const [session,setSession] = useState({logged:false});
    const {online} = useContext(SocketContext);


    const store = useStore();


    const initSession = function(){
        axios.get('/login/getSession').then(function(response){
            setSession(response.data);
            store.dispatch(startSession(response.data));
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
            <h1>hola {online?'online':'offline'}</h1>
            
            {!logged? 
            <Router>
            <Switch>
                <Route exact path = "/register" >
                    <Registro initSession = {initSession}/>
                </Route>
                <Route>
                    <Login initSession = {initSession}/>
                </Route>
            </Switch>
            </Router>
            :
            <Router>
                <ModuloInteraccion/>     
                <Switch>
                    <Route exact path="/">
                        <Inicio/>
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
                    <Route path = '/VerNotas/:id/subirNota/:id2'>
                    </Route>
                    <Route path = '/Editar/Curso/:idCurso' component = {EditarCurso}>
                        <EditarCurso/>
                    </Route>
                    <Route path='/VerNotas/:nota' component = {VerNotas}>
                        <VerNotas/>
                    </Route>

                    <Route path = '/Clase/:idCurso/:idClase' component = {PagClase}>
                        <PagClase session = {session}/>
                    </Route>
                </Switch>          
                <div className = 'LoginState'>  
                <button className = 'LoggoutButton' onClick = {handleLogout}>CerrarSession</button>
                </div>
            </Router>            
            }

        </div>
    )
}

