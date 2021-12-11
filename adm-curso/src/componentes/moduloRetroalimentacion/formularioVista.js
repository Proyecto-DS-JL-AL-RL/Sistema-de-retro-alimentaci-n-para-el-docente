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
            preguntas : [ ],
            respuestas:[]
        };        
      };
    
      componentDidMount(){
          //console.log(this.props.id);
          axios.get('/retAl/getFormView/'+this.state.formId).then((response)=>{
           //console.log('res',response.data);
            this.setState(response.data,()=>{this.setState({respuestas: Array(this.state.preguntas.length)})});
        });
      }

      sendAnswers(){
            const body = {
                formId:this.state.formId,
                userCod:this.props.idUser,
                answers:this.state.respuestas
             }
             axios.post('/retAl/saveFormAnswer',body).then((response)=>{
                 console.log(response);
            });;
      }

      updateAnswer(valor,index){
        let arr = this.state.respuestas;
        arr[index]=valor;
        this.setState({respuestas: arr});
      }

    render() {
        return ( 
        <div id = "fVContainer">            
            <div className = "formularioBackground">
            <div id = "tituloGeneral">  {this.state.titulo} </div>
                {this.state.preguntas.map(function(preguntaP,index){
                        return <div key = {preguntaP.titulo} className = 'fVPregunta' ><FormPregunta pregunta = {preguntaP} isProfesor = {this.state.isProfesor} updateAnswer = {(val)=>{this.updateAnswer(val,index)}}/></div>
                    },this)}
             <div id = "CVconfirmSection">
                <div id = "CVconfirmButton">
                    <button className = "confirmButton" onClick = {()=>{this.sendAnswers()}}> Enviar </button>
                </div>
            </div>
            </div>
           
        </div>
    )}   
}

export default  FormVista;