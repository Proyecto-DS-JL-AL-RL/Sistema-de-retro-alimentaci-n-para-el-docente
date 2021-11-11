import React from 'react'
import RespuestaAlternativas from '../VerRespuesta/Tipos/RespuestaAlternativas';
import './VerEstadisticas.css';
import RespuestaAlumno from './RespuestaAlumno';
import EstadoAlumnos from './EstadoAlumnos';
import VerEstadisticasPorPregunta from './VerEstadisticasPorPregunta';
export default function VerEstadisticas() {
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
                        <VerEstadisticasPorPregunta/>
                    </div>
                    
                </div>
            </div>
            <div className="ctnRespuestas">
                <RespuestaAlumno/>
            </div>
        </div>
    )
}
