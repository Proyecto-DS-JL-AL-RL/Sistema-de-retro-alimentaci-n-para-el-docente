import React from 'react';
import "./generales/general.css";
import "./formPregunta.css";

class FormPregunta extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isProfesor: this.props.isProfesor,
            cursoActual : 'CursoFixed', //Fixeado
            titulo: this.props.pregunta.titulo,
            descripcion: this.props.pregunta.descripcion,
            opciones: this.props.pregunta.alternativas
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
                        return <div key = { opcion.descripcion }>
                                    <label className = "lblOption">
                                        {this.state.isProfesor?
                                            <div/>                                           
                                            :
                                            <input type = "radio" name = {this.state.titulo} value = {opcion.descripcion}/>
                                        }     
                                        {opcion.descripcion}       
                                        {this.state.isProfesor? <label>  = {opcion.percent}%</label>:<div/>}                                
                                    </label>
                                </div>
                    },this)}
                </fieldset>
            </div>
        </div>
        </div>
    )}   
}

export default  FormPregunta;