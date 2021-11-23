import React from 'react';
import "./generales/general.css";
import "./ResumenEstadisticas.css";

class ResumenEstadisticas extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            TituloClase: 'Metodos de optimizacion',
            Descripcion: 'XD',
            Participacion: 80,
            Aciertos: 70,
            Aumento: +10,
            RespectoAlPromedio: -10,
            //0 = profesor, 1 = alumno
            vista: this.props.vista,
            idAlumno: this.props.id
        };  
      };
    
    
    render() {
        return ( 
        <div className = 'alumnStatContainer' >
            <div className = {!this.state.vista?'popUpContainer':'frameContain'}>  
            <div className = 'ASTcontent'>
                <div><h1>Estadisticas para esta clase</h1></div>
                <div><h2> Participación : {String(this.state.Participacion)}% </h2></div>
                <div><h2> Aciertos : {String(this.state.Participacion)}% </h2></div>
                <div><h2> Aumento : {String(this.state.Participacion)}% </h2></div>
                <div><h2> Respecto al Promedio : {String(this.state.Participacion)}% </h2></div>
            </div>
            </div>
        </div>
    )}   
}

export default  ResumenEstadisticas;