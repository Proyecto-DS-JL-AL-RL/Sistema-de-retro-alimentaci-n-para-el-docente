import React from 'react';
import "./generales/general.css";
import "./StatsGenerales.css";
import FormPregunta from './formPregunta';
import ResumenEstadisticas from './ResumenEstadisticas';

class EstadisticasGenerales extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            TituloClase: 'Metodos de optimizacion',
            Descripcion: 'XD',
            Participacion: 80,
            Aciertos: 70,
            //0 = profesor, 1 = alumno
            vista: this.props.vista,
            Alumnos : [  
                { Nombre: 'Jorge', Apellido: 'Parishuana', id: 1},
                { Nombre: 'Jorge', Apellido: 'Parishuana', id: 1},
                { Nombre: 'Jorge', Apellido: 'Parishuana', id: 1},
                { Nombre: 'Jorge', Apellido: 'Parishuana', id: 1}
            ],
            showing : false,
            idShow: 0
        };  
        this.mostrarAlumno = function(id){
            this.setState({showing : true, idShow: id});
        }   
    };
    
    
    
    render() {
        return ( 
        <div className = 'PrfStatContainer' >
            <div className = 'frameContain'>  
                <div className = 'PSTContent'>
                    <div><h1>Estadisticas Generales</h1></div>
                    <div><h2> Participación : {String(this.state.Participacion)}% </h2></div>
                    <div><h2> Promedio de Aciertos: {String(this.state.Aciertos)}% </h2></div>
                    <div className = 'listaAlumnos'>
                        {this.state.Alumnos.map(function(alumno){
                            return <div onClick = {()=>{this.mostrarAlumno(alumno.id)}} className = 'AlumnoElement'>{alumno.Nombre} {alumno.Apellido}</div>
                        },this)}
                </div>
                </div>
            </div>
            {this.state.showing?
            <div className = 'StatsPopup'><ResumenEstadisticas vista = {0} id = {this.state.idShow}/>
            <div className = 'StatsClosPopUp'><button className = 'closeButton' onClick = {()=>{this.setState({showing:false})}}>X</button></div>
            </div>                  
            :<div></div>}
        </div>
    )}   
}

export default  EstadisticasGenerales;