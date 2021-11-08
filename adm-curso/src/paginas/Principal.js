import React from 'react'
import {Link,BrowserRouter as Router,
    Route,Switch} from 'react-router-dom';
import CrearPregunta from '../componentes/Visualizacion/mouduloInteraccion/CrearPregunta';
import VerEstadisticas from '../componentes/Visualizacion/mouduloInteraccion/VerEstadisticas/VerEstadisticas';

import VerRespuesta from '../componentes/Visualizacion/mouduloInteraccion/VerRespuesta/VerRespuesta';
export default function Principal() {
    return (
        <div>
            
            <Router>

                <Link to="/CrearPregunta"> CrearPregunta</Link>
                <Link to="/VerRespuesta">VerRespuesta</Link>
                <Link to="/VerEstadisticas">VerEstadisticas</Link>
                


                <Switch>
                    <Route exact path="/">

                    </Route>
                    <Route path="/VerRespuesta">
                        <VerRespuesta/>
                    </Route>
                    <Route path="/CrearPregunta">
                        <CrearPregunta/>
                    </Route>
                    <Route path="/VerEstadisticas">
                        <VerEstadisticas/>
                    </Route>
                </Switch>
            </Router>
            
        </div>
    )
}
