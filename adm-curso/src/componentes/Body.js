import './Body.css';
import React from 'react';
import BasicTable from './componentesBasicos/TablaNotas'
import test  from './clases/clases.js'

class Body extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style:"table",
            text:"texto"
        }
    }
    render() {
        return ( 
        <div id="Cuadro">
            <BasicTable text_style={this.state.text} style={this.state.style} Nota={test[2]}/>
        </div>
        )}
}

export default Body