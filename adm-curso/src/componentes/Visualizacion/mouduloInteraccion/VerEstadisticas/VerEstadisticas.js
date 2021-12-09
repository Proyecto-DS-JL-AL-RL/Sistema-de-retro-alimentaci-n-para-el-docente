import React, { useContext, useEffect,useState } from 'react'
import RespuestaAlternativas from '../VerRespuesta/Tipos/RespuestaAlternativas';
import './VerEstadisticas.css';
import RespuestaAlumno from './RespuestaAlumno';
import EstadoAlumnos from './EstadoAlumnos';
import VerEstadisticasPorPregunta from './VerEstadisticasPorPregunta';
import { useParams } from 'react-router-dom';
import { SocketContext } from '../../../../context/SocketContext';
export default function VerEstadisticas() {
    const params = useParams();
    const [ansXQues,setAnsXQues] = useState([]);
    const {socket} = useContext(SocketContext);
    useEffect(async()=>{
        const res = await fetch('/estadisticas/'+params.idSesion);
        const data = await res.json();
        setAnsXQues(data.respuestasPorPregunta);
        //console.log(data.respuestasPorPregunta);
    },[socket]);

    return (
        <div className="ctnEstadisticas">
            <div className="ctnContenido">
                Estadisticas de Sesión
            </div>
            <div className="content">
                <div className="ctnGrafico">
                    <div className="Titulo"> Estado - Alumnos </div>
                    <div className="grafico">
                        <EstadoAlumnos/>
                    </div>
                </div>
                
                <div className="ctnGrafico">
                    <div className="Titulo"> Respuestas por Pregunta </div>
                    <div className="grafico">
                        <VerEstadisticasPorPregunta ansXQues = {ansXQues}/>
                    </div>
                    
                </div>
            </div>
            <div className="ctnRespuestas">
                <RespuestaAlumno/>
            </div>
        </div>
    )
}
