import React from 'react'
import { respuestaAlumno} from './DatosRA';
import './RespuestaAlumno.css';
export default function RespuestaAlumno() {
    return (
        
        <div className="contUL">
        {respuestaAlumno.map(e=>{
            return <div className="contItem" key={e.id}>
                {e.rpta}
            </div>
        })}
        </div>
           
       
    )
}
