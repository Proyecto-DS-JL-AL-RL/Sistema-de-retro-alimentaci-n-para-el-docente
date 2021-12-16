import React from 'react';
import "./generales/general.css";
import "./ComentarioForm.css";
import CrearClase from './crearClase';
import axios from 'axios';


class ComentarioForm extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clase: this.props.clase,
            titulo: '',                 //Fecha
            descripcion: '',
            fecha: new Date()

        };    
        const close = props.close;
        this.crearComentario = function(){
            const data = {
                clase: this.state.clase,
                titulo: this.state.titulo,
                descripcion: this.state.descripcion,
                fecha : this.state.fecha,
                usuario: this.props.session.user
            } 
            axios.post('/retAl/createCommentary',data).then(function(response){
                //console.log(response);
                close();
            });
            //console.log(data);
        };    
      };
    
    

    render() {
        return ( 
        <div id = "cFormContainer">
        <div className = "popUpContainer">
            <div id = "lbl1">
                <div className = "lblBase1"> Envia comentarios</div>
            </div>
            <div id = "cFormTitulo">
                <input className = "defInput" value = {this.state.titulo} onChange = {e=>this.setState({titulo:e.target.value})}/>
            </div>
            <div id = "cFormMensaje">
                <textarea className = "defInput" value = {this.state.descripcion} onChange = {e=>this.setState({descripcion:e.target.value})}/>
            </div>
           

            <div id = "CFcloseBtn">
                <button className = "closeButton" onClick = {this.props.close}> X</button>
            </div>
            <div id = "CFsendBtn">
                <button className = "confirmButton" onClick = {()=>{this.crearComentario.call(this)}}> OK</button>
            </div>    
            
        </div>
        </div>
    )}   
}

export default  ComentarioForm;