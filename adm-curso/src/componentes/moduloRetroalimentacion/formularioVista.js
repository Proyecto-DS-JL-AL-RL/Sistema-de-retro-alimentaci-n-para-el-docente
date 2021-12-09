import React from 'react';
import "./generales/general.css";
import "./formularioVista.css";
import FormPregunta from './formPregunta';
import axios from 'axios';

class FormVista extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isProfesor: this.props.vista,
            formId: this.props.id || '',
            titulo: '',
            respondidos: 0,
            preguntas : [ ]
        };        
      };
    
      componentDidMount(){
          //console.log(this.props.id);
          axios.get('/retAl/getFormView/'+this.state.formId).then((response)=>{
           //console.log('res',response.data);
            this.setState(response.data);
        });
      }


    render() {
        return ( 
        <div id = "fVContainer">            
            <div className = "formularioBackground">
            <div id = "tituloGeneral">  {this.state.titulo} </div>
                {this.state.preguntas.map(function(preguntaP){
                        return <div key = {preguntaP.titulo} className = 'fVPregunta' ><FormPregunta pregunta = {preguntaP} isProfesor = {this.state.isProfesor}/></div>
                    },this)}
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