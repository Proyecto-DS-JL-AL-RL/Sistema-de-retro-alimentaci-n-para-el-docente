import React from 'react';
import "./generales/general.css";
import "./StatsGenerales.css";
import ResumenEstadisticas from './ResumenEstadisticas';
import axios from 'axios';

class EstadisticasGenerales extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Participacion: 0,
            Aciertos: 0,
            //0 = profesor, 1 = alumno
            vista: this.props.vista,
            Alumnos : [ ],
            showing : false,
            idShow: 0
        };  
        this.mostrarAlumno = function(id){
            this.setState({showing : true, idShow: id});
        }   
    };
    
    componentDidMount(){
        if(!this.state.vista){
        axios.get('/retAl/getStatsView/'+this.props.idCurso).then((res)=>{
            if (res.data._id){
                console.log(res.data)
                this.setState({Participacion: res.data.participacion, Aciertos: res.data.Aciertos, Alumnos: res.data.alumnosStats});
            }
            
        });
    }
    }
    
    
    render() {
        return ( 
        <div className = 'PrfStatContainer' >
            <div className = 'frameContain'>  
                <div className = 'PSTContent'>
                    <div><h1>Estadisticas Generales</h1></div>
                    <div><h2> Participación : {String(this.state.Participacion)}% </h2></div>
                    <div><h2> Promedio de Aciertos: {String(this.state.Aciertos)}% </h2></div>
                    <div className = 'listaAlumnos'>
                        {this.state.Alumnos.map(function(alumno,index){
                            return <div onClick = {()=>{this.mostrarAlumno(index)}} className = 'AlumnoElement'>{alumno.alumno.nombre} {alumno.alumno.apellido}</div>
                        },this)}
                </div>
                </div>
            </div>
            {this.state.showing?
            <div className = 'StatsPopup'><ResumenEstadisticas vista = {0} datosAlumno = {this.state.Alumnos[this.state.idShow]} doneDatos = {true}/>
            <div className = 'StatsClosPopUp'><button className = 'closeButton' onClick = {()=>{this.setState({showing:false})}}>X</button></div>
            </div>                  
            :<div></div>}
        </div>
    )}   
}

export default  EstadisticasGenerales;