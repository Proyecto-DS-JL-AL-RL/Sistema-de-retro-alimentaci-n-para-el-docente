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
    const [estadoAlumno,setEstadoAlumno] = useState([]);
    const [tablaAlumno,setTablaAlumno] = useState([]);
    
    const {socket} = useContext(SocketContext);
    useEffect(async()=>{
        const res = await fetch('/estadisticas/'+params.idSesion);
        const data = await res.json();
        console.log(data);
        setAnsXQues(data.respuestasPorPregunta);
        setEstadoAlumno(data.estadoAlumno);
        setTablaAlumno(data.tablaAlumno);
        //console.log(data.respuestasPorPregunta);
    },[]);
    /*useEffect(()=>{
        socket.on('newQuestion',(data)=>{
            setAnsXQues([
                ...ansXQues,
                'XD'
            ])
        });
        return ()=>{
            socket.on('newQuestion');
        }     
    },[socket])
    /*useEffect(()=>{
        socket.on('newAnswer',(data)=>{
            
        });
        return ()=>{
            socket.on('newAnswer');
        }   
    },[socket])*/
    return (
        
        <div className="ctnEstadisticas">
            {console.log(estadoAlumno)}
            <div className="ctnContenido">
                Estadisticas de Sesión
            </div>
            <div className="content">
                <div className="ctnGrafico">
                    <div className="Titulo"> Estado - Alumnos </div>
                    <div className="grafico">
                        
                        <EstadoAlumnos estadoAlumno={estadoAlumno}/>
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
                <RespuestaAlumno tablaAlumno={tablaAlumno}/>
            </div>
        </div>
    )
}
