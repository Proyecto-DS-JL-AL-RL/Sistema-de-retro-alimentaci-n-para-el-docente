import React from 'react';
import "./generales/general.css";
import "./formPregunta.css";

class FormPregunta extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cursoActual : 'CursoFixed', //Fixeado
            titulo: this.props.pregunta.titulo,
            descripcion: this.props.pregunta.description,
            opciones: ['xd1','xd2','xd3']
        };        
      };
    
    


    render() {
        return ( 
        <div id = "fPContainer">
        <div className = "frameContain">
            <div id = "fPlbl1"> {this.state.titulo} </div>

            <div id = "fPlDesc"> {this.state.descripcion} </div>

            <div id = "fPopciones">
                <fieldset>
                    {   this.state.opciones.map(function(opcion){
                        return <div key = { opcion }>
                                    <label className = "lblOption">
                                        <input type = "radio" name = {this.titulo} value = {opcion}/>{opcion}
                                    </label>
                                </div>
                    },{titulo:this.state.titulo})}
                </fieldset>
            </div>
        </div>
        </div>
    )}   
}

export default  FormPregunta;