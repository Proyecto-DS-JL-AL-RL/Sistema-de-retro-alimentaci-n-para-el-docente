import React from 'react';
import "./generales/general.css";
import "./crearClase.css";

class CrearClase extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cursos: ['xd1','xd2','xd3'],
            cursoActual : 'CursoFixed', //Fixeado
            titulo: '',                 //Fecha
            descripcion: '',
            fecha: new Date()
        };        
      };
    
    crearClase = function(){
        console.log('Xd');
    };

    render() {
        return ( 
        <div id = "cClaseContainer">
        <div className = "popUpContainer">
            
            <div><h1> Creando clase </h1></div>
            
            <div id = "cClaseFecha">{"Fecha: "+this.state.fecha.getDate()+"/"+this.state.fecha.getMonth()+"/"+this.state.fecha.getFullYear()}</div>
            <div id = "cClaseCursos">
            <div id = "cClblCurso">Curso: </div>
            <select className = "baseSelection">
            {this.state.cursos.map(function(curso){
                return <option className = "baseSelOption">{curso}</option>
            })}    
            </select></div>
            <div id = "frstInput">
            <input className = "defInput" type = "text" value = {this.state.titulo} onChange = {(e) => {this.setState({ titulo: e.target.value})}}/>
            </div>
            <div id = "scndInput">
            <input className = "defInput"  type = "text" value = {this.state.descripcion} onChange = {(e) => {this.setState({ descripcion: e.target.value})}}/>
            </div>
            
            <div id = "cClaseConfirm">
            <button onClick = {(e)=>{

                    console.log("Boton")
            }} className = "confirmButton"> xD</button>
            </div>

        </div>
        </div>
    )}   
}

export default  CrearClase;