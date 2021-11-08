import React from 'react'
import RespuestaAlternativas from '../VerRespuesta/Tipos/RespuestaAlternativas';
import './VerEstadisticas.css';
import RespuestaAlumno from './RespuestaAlumno';
export default function VerEstadisticas() {
    return (
        <div className="ctnEstadisticas">
            <div className="ctnContenido">
                <div className="ctnPreguntas">
                    hola
                </div>
                <div className="ctnConsolidado">
                    Consolidado
                </div>
            </div>
            <div className="content">
                <div className="ctnGrafico">
                    <RespuestaAlternativas/>
                </div>
                <div className="ctnRespuestas">
                    <RespuestaAlumno/>
                </div>
            </div>
            
        </div>
    )
}
