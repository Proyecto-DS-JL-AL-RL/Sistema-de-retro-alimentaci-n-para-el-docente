import React from 'react'
import {Link,BrowserRouter as Router,
    Route,Switch} from 'react-router-dom';
import CrearPregunta from '../componentes/Visualizacion/mouduloInteraccion/CrearPregunta';


import VerCurso from '../componentes/Curso'
import VerPerfil from '../componentes/Perfil';
import Inicio from '../componentes/Inicio'
import test from '../componentes/clases/clases.js'
import VerNotas  from  '../componentes/Notas'

import CrearClase  from '../componentes/moduloRetroalimentacion/crearClase';
import ComentarioForm from '../componentes/moduloRetroalimentacion/ComentarioForm';
import FormVista from '../componentes/moduloRetroalimentacion/formularioVista';
import PuntuarClase from '../componentes/moduloRetroalimentacion/PuntuarClase';
import CrearFormP from '../componentes/moduloRetroalimentacion/CrearFormP';
import CrearFormulario from '../componentes/moduloRetroalimentacion/CrearFormulario';

import VerEstadisticas from '../componentes/Visualizacion/mouduloInteraccion/VerEstadisticas/VerEstadisticas';
import VerRespuesta from '../componentes/Visualizacion/mouduloInteraccion/VerRespuesta/VerRespuesta';
import Header from '../componentes/Header';
import Cabecera from './Cabecera';
import ModuloInteraccion from './Interaccion/ModuloInteraccion.js';
export default function Principal() {
    
    return (
        <div>
            <Router>
                <Link to="/CrearPregunta"> CrearPregunta</Link>
                <Link to = "/CrearClase">Crear Clase</Link>
                <Link to = "/ComentarioForm">ComentarioClase</Link>
                <Link to = "/formPregunta">formPregunta</Link>
                <Link to ="/PuntuarClase">PuntuarClase </Link>
                <Link to ="/CrearForm">CrearFormPREGUNTA </Link>

                <Link to="/VerRespuesta">VerRespuesta</Link>
                <Link to="/VerEstadisticas">VerEstadisticas</Link>
                <Link id="link" to="/Inicio">Ver Cursos</Link>
                <Link id="link" to="/VerPerfil"> mi perfil</Link>
                <ModuloInteraccion/>
                <Switch>
                    <Route exact path="/">
                    </Route>
                    <Route path="/VerRespuesta">
                        <VerRespuesta/>
                    </Route>
                    <Route path="/CrearPregunta">
                        <CrearPregunta/>
                    </Route>

                    <Route path = "/CrearClase">
                        <CrearClase/>    
                    </Route>
                    <Route path = "/ComentarioForm">
                        <ComentarioForm/>    
                    </Route>
                    <Route path = "/formPregunta">
                        <FormVista/>    
                    </Route>
                    <Route  path = "/PuntuarClase">
                        <PuntuarClase/>
                    </Route>
                    <Route path = "/CrearForm">
                        <CrearFormulario/>
                    </Route>
                    <Route path="/VerEstadisticas">
                        <VerEstadisticas/>
                    </Route>
                    <Route path="/Inicio">
                        <Inicio/>
                    </Route>
                    <Route path="/VerPerfil">
                        <VerPerfil/>
                    </Route>
                    <Route path = '/VerCurso/:id' component = {VerCurso}>
                        <VerCurso/>
                    </Route>
                    <Route path='/VerNotas/:nota' component = {VerNotas}>
                        <VerNotas/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
