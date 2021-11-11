import React,{useState} from 'react'

import Canvas from './Canvas';
import RespuestaAlternativas from './Tipos/RespuestaAlternativas.js';
import RespuestaVF from './Tipos/RespuestaVF';
import RespuestaPalabra from './Tipos/RespuestaPalabra';
import './VerRespuesta.css';
import RespuestaArgumento from './Tipos/RespuestaArgumento';
import { respuestaAlternativas } from './Tipos/DatosRespuesta';
import Tipo from './Tipo';
import RespuestaPorAlumno from './RespuestaPorAlumno';

const pregunta = "¿Cuanto es 1 +1 ?";
export default function VerRespuesta() {
    
    const [tipo,setTipo] = useState(3);
    function cambioTipo(t){

        console.log(t);
        setTipo(t);
    }
    return (
        <div className="ctnVerRespuesta" >
            <div className="ctnPregunta">
                {pregunta}
            </div>
            <div className={(tipo==4?"ctnRespuestavf":"ctnRespuesta" + (tipo==2?' rxa':""))}>
                {tipo==1 && <RespuestaPalabra/>}
                {tipo==2 && <RespuestaPorAlumno tipo={tipo}/>}

                {tipo==3 && <RespuestaAlternativas/>}
                {tipo==4 && <RespuestaVF/>}
            </div>
            {
                tipo!=2 &&  <div className="rptaAlumno">
                    <RespuestaPorAlumno tipo={tipo}/>
                </div>
            }
            <Tipo cambio = {cambioTipo}/>
            
            
            
        </div>
    )
}
/**
 * <div className="canvasf" >
                
                <Canvas/>
            </div>
            <div className="Prueba">
                <RespuestaAlternativas/>
            </div>
            <div className="Prueba">
                <RespuestaVF/>
                
            </div>
            <div className="todo">
                <RespuestaPalabra/>
            </div>
 */
