import React from 'react';
import "./generales/general.css";
import "./formularioVista.css";
import FormPregunta from './formPregunta';

class FormVista extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            preguntas : [
                {titulo : ' titulo1' , description : 'descripcion1' },
                {titulo : ' titulo2' , description : 'descripcion2' },
                {titulo : ' titulo3' , description : 'descripcion3' },
            ]
        };        
      };
    


    render() {
        return ( 
        <div id = "fVContainer">            
            <div className = "formularioBackground">
            <div id = "tituloGeneral">  TITULO GENERAL </div>
                {this.state.preguntas.map(function(preguntaP){
                        return <div key = {preguntaP.titulo} className = 'fVPregunta' ><FormPregunta pregunta = {preguntaP}/></div>
                    })}
             <div id = "CVconfirmSection">
                <div id = "CVconfirmButton">
                    <button className = "confirmButton">  </button>
                </div>
            </div>
            </div>
           
        </div>
    )}   
}

export default  FormVista;