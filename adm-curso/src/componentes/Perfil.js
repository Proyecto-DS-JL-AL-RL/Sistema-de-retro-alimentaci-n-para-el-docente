import React from 'react';
import Avatar from './componentesBasicos/Avatar.js'
import test  from './clases/clases.js'
import './Perfil.css'
import BasicButtons from './componentesBasicos/CommonButton'


class VerPerfil extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
          avatar_style:"img" ,
          variant_button:"contained",
          id_style:"pbutton"
        };
    }   
    render() {
        return ( 
        <div>
            <div id="pCuadro">
                    <Avatar style={this.state.avatar_style} avatar={test['user'].getImagen()}/>
                    <div id="Perfil">
            <h1 id="Titulo">Mi Perfil</h1>
                        <h2>Nombre:</h2>
                        <input id="input" value={test['user'].getNombre()} disabled/>
                        <h2>Apellido:</h2>
                        <input id="input" value={test['user'].getApellido()} disabled/>
                        <h2>Edad:</h2>
                        <input id="input" value={test['user'].getEdad()} disabled/>
                        <h2>Correo:</h2>
                        <input id="input" value={test['user'].getCorreo()} disabled/>
                </div>
            </div>         
                <BasicButtons style={this.state.id_style} variant={this.state.variant_button} text="Volver a Inicio"/>
        </div>
    )}
}

export default  VerPerfil;