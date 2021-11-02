import React from 'react'
import {Link,BrowserRouter as Router,
    Route,Switch} from 'react-router-dom';
import CrearPregunta from '../componentes/Visualizacion/mouduloInteraccion/CrearPregunta';
export default function Principal() {
    return (
        <div>
            
            <Router>
                <Link to="/CrearPregunta"> CrearPregunta</Link>
                <Switch>
                    <Route exact path="/">

                    </Route>
                    <Route path="/CrearPregunta">
                        <CrearPregunta/>
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}
