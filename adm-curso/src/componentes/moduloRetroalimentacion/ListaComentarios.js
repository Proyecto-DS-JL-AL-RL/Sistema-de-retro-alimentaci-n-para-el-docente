import React from 'react';
import "./generales/general.css";
import "./ListaComentarios.css";
import Comentario from './Comentario';


class ListaComentario extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            comentarios : [
                {titulo: 'Titulo 1',autor: 'Jorge Luis Parishuana',hasFile: true},
                {titulo: 'Titulo 2',autor: 'pp',hasFile: false},
                {titulo: 'Titulo 3',autor: 'pp',hasFile: false},
                {titulo: 'Titulo 3',autor: 'pp',hasFile: false},
                {titulo: 'Titulo 3',autor: 'pp',hasFile: false},
                {titulo: 'Titulo 3',autor: 'pp',hasFile: false},
                {titulo: 'Titulo 3',autor: 'pp',hasFile: false},
                {titulo: 'Titulo 3',autor: 'pp',hasFile: false},
                {titulo: 'Titulo 3',autor: 'pp',hasFile: false}
            ]
        };        
      };
    
    crearClase = function(){
        console.log('Xd');
    };

    render() {
        return ( 
        <div className = "LCContainer">
            <div className = "elementContainer">
                {this.state.comentarios.map(function(eComentario){
                    return <div className = 'LCComent'><Comentario comentario = {eComentario}/></div>
                })}
            </div>
        </div>
    )}   
}

export default  ListaComentario;