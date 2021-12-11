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
    
    updateAns(index){
        const updt = this.props.updateAnswer;
        updt(index);
    }


    render() {
        return ( 
        <div id = "fPContainer">
        <div className = "frameContain">
            <div id = "fPlbl1"> {this.state.titulo} </div>

            <div id = "fPlDesc"> {this.state.descripcion} </div>

            <div id = "fPopciones">
                <fieldset>
                    {   this.state.opciones.map(function(opcion,index){
                        return <div key = { opcion.descripcion }>
                                    <label className = "lblOption">
                                        {this.state.isProfesor?
                                            <div/>                                           
                                            :
                                            <input type = "radio" name = {this.state.titulo} value = {opcion.descripcion} onChange = {()=>{this.updateAns(index)}}/>
                                        }     
                                        {opcion.descripcion}       
                                        {this.state.isProfesor? <label>  = {opcion.percent*100}%</label>:<div/>}                                
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