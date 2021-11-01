import React from 'react';
import './Curso.css'

class Curso extends  React.Component {
    render() {
        return ( 
        <div id="Top">
            <div id="Foto">
                        <img id="FotoPerfil" src="https://64.media.tumblr.com/ae85d8e60cb80166b5d6c64a2d68689e/f3b595ba03815f5c-2f/s640x960/ee69db1551d4bc59f385be3cf60985d2ee028d94.png" alt="foto"></img>
            </div>
            <div id="Pantalla">
                <div id="NombreCurso">
                    <h1 id="Titulo">Miko Iino</h1>
                </div>
            </div>
            <div id="Cuadro"></div> 
        </div>
    )}
}

export default  Curso;