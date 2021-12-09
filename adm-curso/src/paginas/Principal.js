import React, { useEffect } from 'react'
import {Link,BrowserRouter as Router,
    Route,Switch} from 'react-router-dom';
import CrearPregunta from '../componentes/Visualizacion/mouduloInteraccion/CrearPregunta';

//import SelectedListItem  from '../componentes/componentesBasicos/MenuCurso';

import EditarCurso from '../componentes/EditarCurso';
import VerCurso from '../componentes/Curso'
import VerPerfil from '../componentes/Perfil';
//import SubirNota from '../componentes/SubirNota'
import Inicio from '../componentes/Inicio'
import VerNotas  from  '../componentes/Notas'
import NuevoCurso from '../componentes/NuevoCurso'
import RegistroCurso from '../componentes/ResgistrarCurso'
import VerEstadisticas from '../componentes/Visualizacion/mouduloInteraccion/VerEstadisticas/VerEstadisticas';
import VerRespuesta from '../componentes/Visualizacion/mouduloInteraccion/VerRespuesta/VerRespuesta';
import Header from '../componentes/Header';
import ModuloInteraccion from './Interaccion/ModuloInteraccion.js';
import PagClase from './pagClase';
import { useState } from 'react';
import Login from './Login';
import Registro from './registro';
import EditarMaterial from '../componentes/EditarMaterial'
import axios from 'axios';
import { useStore } from 'react-redux';
import VerMaterial from '../componentes/verMaterial';
import { startSession } from '../feature/sessionSlice';
import './Principal.css'

export default function Principal() {
    const [logged,setLogged] = useState(false);
    const [session,setSession] = useState({logged:false});



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
                        <Inicio iduser={session.user}/>
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
                        <VerPerfil idprofesor={session.user}/>
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
                        <VerNotas />
                    </Route>
                    <Route path = '/Clase/:idCurso/:idClase' component = {PagClase}>
                        <PagClase session = {session}/>
                    </Route>
                    <Route path='/NuevoCurso'>
                        <NuevoCurso idprofesor={session.user}/>
                    </Route>
                    <Route path='/registrarse'>
                        <RegistroCurso iduser = {session.user}/>
                    </Route>
                    <Route path='/verMaterial/:id' component={VerMaterial}>
                        <VerMaterial/>
                    </Route>
                    <Route path='/EditarMaterial/:idFile' component={EditarMaterial}>
                        <EditarMaterial/>
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

