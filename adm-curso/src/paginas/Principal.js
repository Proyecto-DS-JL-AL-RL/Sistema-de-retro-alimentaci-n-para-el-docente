import React from 'react'
import {Link,BrowserRouter as Router,
    Route,Switch} from 'react-router-dom';
import CrearPregunta from '../componentes/Visualizacion/mouduloInteraccion/CrearPregunta';

import SelectedListItem  from '../componentes/componentesBasicos/MenuCurso';

import VerCurso from '../componentes/Curso'
import VerPerfil from '../componentes/Perfil';
import Inicio from '../componentes/Inicio'
import test from '../componentes/clases/clases.js'
import VerNotas  from  '../componentes/Notas'
import EditarCurso from '../componentes/EditarCurso'
import CrearClase  from '../componentes/moduloRetroalimentacion/crearClase';
import ComentarioForm from '../componentes/moduloRetroalimentacion/ComentarioForm';
import FormVista from '../componentes/moduloRetroalimentacion/formularioVista';
import PuntuarClase from '../componentes/moduloRetroalimentacion/PuntuarClase';
import CrearFormP from '../componentes/moduloRetroalimentacion/CrearFormP';
import CrearFormulario from '../componentes/moduloRetroalimentacion/CrearFormulario';
import ListaComentario from '../componentes/moduloRetroalimentacion/ListaComentarios';
import SelectedListIncio from '../componentes/componentesBasicos/MenuInicio.js';
import VerEstadisticas from '../componentes/Visualizacion/mouduloInteraccion/VerEstadisticas/VerEstadisticas';
import VerRespuesta from '../componentes/Visualizacion/mouduloInteraccion/VerRespuesta/VerRespuesta';
import Header from '../componentes/Header';
import Cabecera from './Cabecera';
import ModuloInteraccion from './Interaccion/ModuloInteraccion.js';
import PagClase from './pagClase';
export default function Principal() {
    
    return (
        <div>
            <Router>

                <ModuloInteraccion/>
     
                <Switch>
                    <Route exact path="/">
                        <Inicio/>
                        <Header NameCurso={'Cursos'} componenteMenu={<SelectedListItem Back={<Principal/>}/>} componentes={<SelectedListIncio  perfil={<VerPerfil/>}/>}/>
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
                    <Route path = '/VerCurso/:id' component = {VerCurso}>
                        <VerCurso/>
                    </Route>
                    <Route path = '/Editar/Curso/:idCurso' component = {EditarCurso}>
                        <EditarCurso/>
                    </Route>
                    <Route path='/VerNotas/:nota' component = {VerNotas}>
                        <VerNotas/>
                    </Route>
                    <Route path = '/Clase/:idCurso/:idClase' component = {PagClase}/>
                </Switch>
            </Router>
        </div>
    )
}
