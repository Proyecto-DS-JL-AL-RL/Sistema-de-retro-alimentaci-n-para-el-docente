import React from 'react'
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
export default function Principal() {
    
    return (
        <div>
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
                    <Route path = '/VerCurso/:id' component = {VerCurso}>
                        <VerCurso/>
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
