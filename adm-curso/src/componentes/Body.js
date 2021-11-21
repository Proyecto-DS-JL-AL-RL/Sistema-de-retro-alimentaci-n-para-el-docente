import './Body.css';
import React from 'react';
import BasicTable from './componentesBasicos/TablaNotas'
import test  from './clases/clases.js'

class Body extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style:"table",
            text:"texto",
            notas: false
        }
    }
    render() {
        return ( 
        <div>
            <button className="btn-curso">Subir Material</button>
            
        </div>
        )}
}

export default Body