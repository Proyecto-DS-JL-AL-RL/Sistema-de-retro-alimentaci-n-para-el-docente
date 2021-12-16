import React from 'react';
import "./generales/general.css";
import "./crearClase.css";
import axios from 'axios';

class CrearClase extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cursoActual : props.curso, //Fixeado
            titulo: '',                 //Fecha
            descripcion: '',
            fecha: new Date()
        };        
      };
    //CC312
    crearClase = function(idCurso){
        axios.post('/retAl/createClass/'+String(this.state.cursoActual),{titulo: this.state.titulo, cuerpo: this.state.descripcion}).then(function(response){
            console.log(response.data);
        });
        this.props.close();
    };

    render() {
        return ( 
        <div id = "cClaseContainer">
        <div className = "popUpContainer">
            
            <div><h1> Creando clase </h1></div>
            
            <div id = "cClaseFecha">{"Fecha: "+this.state.fecha.getDate()+"/"+this.state.fecha.getMonth()+"/"+this.state.fecha.getFullYear()}</div>
            <div id = "cClaseCursos">
            <div id = "cClblCurso">Curso: {this.state.cursoActual}</div>
            </div>
            <div id = "frstInput">
            <input className = "defInput" type = "text" value = {this.state.titulo} onChange = {(e) => {this.setState({ titulo: e.target.value})}}/>
            </div>
            <div id = "scndInput">
            <input className = "defInput"  type = "text" value = {this.state.descripcion} onChange = {(e) => {this.setState({ descripcion: e.target.value})}}/>
            </div>
            
            <div id = "cClaseConfirm">
            <button onClick = {()=>this.crearClase(this.state.cursoActual)} className = "confirmButton"> Crear</button>
            </div>

        </div>
        </div>
    )}   
}

export default  CrearClase;