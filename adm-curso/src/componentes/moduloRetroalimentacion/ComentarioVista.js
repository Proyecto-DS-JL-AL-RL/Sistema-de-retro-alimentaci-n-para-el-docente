import React from 'react';
import "./generales/general.css";
import "./ComentarioForm.css";
import CrearClase from './crearClase';
import axios from 'axios';


class ComentarioVista extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clase: this.props.clase,
            titulo: ' '       ,          //Fecha
            descripcion: ' ',
            fecha: new Date()

        };    
      };
    
    setStateThis = this.setState;
    
    componentDidMount(){
        var state = {};
        axios.get('/retAl/getComentaryView/'+this.props.comentario).then(function(response){
            //console.log(response.data);
            state = {
                titulo: response.data.titulo,
                descripcion: response.data.cuerpo
            }
        }).then(()=>{
            this.setState(state);
        });
    };

    render() {
        return ( 
        <div id = "cFormContainer">
        <div className = "popUpContainer">
            <div id = "cFormTitulo">
                <input className = "defInput" value = {this.state.titulo} onChange = {e=>this.setState({titulo:e.target.value})} />
            </div>
            <div id = "cFormMensaje">
                <textarea className = "defInput" value = {this.state.descripcion} onChange = {e=>this.setState({descripcion:e.target.value})} />
            </div>

            <div id = "CFcloseBtn">
                <button className = "closeButton" onClick = {this.props.close}> X</button>
            </div>

        </div>
        </div>
    )}   
}

export default  ComentarioVista;