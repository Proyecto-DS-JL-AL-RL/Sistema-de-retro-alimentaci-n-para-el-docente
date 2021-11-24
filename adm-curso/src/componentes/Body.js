import './Body.css';
import React from 'react';

import BasicTable from './componentesBasicos/TablaNotas'
import test  from './clases/clases.js'
import SubirMaterial from './SubirMaterial'

let user = test['user']



class Body extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            style:"table",
            text:"texto",
            show:false
        }
    }
    render() {
        return ( 
        <div>
            {user.getCondicion()?<button className="btn-curso" onClick={()=>{this.setState({show:!this.state.show})}} > Subir Material</button>:false}
                {this.state.show?<SubirMaterial/>:false}
        </div>
        )}
}

export default Body