import React from 'react';
import "./generales/general.css";
import "./ResumenEstadisticas.css";
import axios from 'axios';

class ResumenEstadisticas extends  React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Participacion: 0,
            Aciertos: 0,
            Aumento: 0,
            RespectoAlPromedio: 0,
            //0 = profesor, 1 = alumno
            vista: this.props.vista,
            idAlumno: this.props.idAlumno,
            doneDatos : this.props.doneDatos
        };  
      };

    componentDidMount(){
        if (this.state.doneDatos){
            if (this.props.datosAlumno){
                const datos = this.props.datosAlumno;
                this.setState({ 
                Participacion: datos.participacion,
                Aciertos: datos.aciertos,
                Aumento: datos.aumento,
                RespectoAlPromedio: datos.resPromedio               
                });
                console.log(datos);
            }
        }else{
            axios.get('/retAl/getStatsAlumno/'+ this.props.idCurso +'/'+this.props.idAlumno).then((res)=>{
                console.log(res.data)
                if (res.data){
                this.setState({ 
                    Participacion: res.data.participacion,
                    Aciertos: res.data.aciertos,
                    Aumento: res.data.aumento,
                    RespectoAlPromedio: res.data.resPromedio               
                    });
                }
            });
            console.log('XD');
        }
    }
    
    render() {
        return ( 
        <div className = 'alumnStatContainer' >
            <div className = {!this.state.vista?'popUpContainer':'frameContain'}>  
            <div className = 'ASTcontent'>
                <div><h1>Estadisticas para esta clase</h1></div>
                <div><h2> Participación : {String(this.state.Participacion)}% </h2></div>
                <div><h2> Aciertos : {String(this.state.Aciertos)}% </h2></div>
                <div><h2> Aumento : {String(this.state.Aumento)}% </h2></div>
                <div><h2> Respecto al Promedio : {String(this.state.RespectoAlPromedio)}% </h2></div>
            </div>
            </div>
        </div>
    )}   
}

export default  ResumenEstadisticas;