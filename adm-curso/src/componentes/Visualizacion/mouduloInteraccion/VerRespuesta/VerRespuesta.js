import React,{useState} from 'react'

import Canvas from './Canvas';
import RespuestaAlternativas from './Tipos/RespuestaAlternativas.js';
import RespuestaVF from './Tipos/RespuestaVF';
import RespuestaPalabra from './Tipos/RespuestaPalabra';
import './VerRespuesta.css';
import RespuestaArgumento from './Tipos/RespuestaArgumento';
import { respuestaAlternativas } from './Tipos/DatosRespuesta';
import Tipo from './Tipo';

const pregunta = "¿Cuanto es 1 +1 ?";
export default function VerRespuesta() {
    const [tipo,setTipo] = useState(4);
    function cambioTipo(t){
        console.log(t);
        setTipo(t);
    }
    return (
        <div className="ctnVerRespuesta" >
            <div className="ctnPregunta">
                {pregunta}
            </div>
            <div className="todo">
                {tipo==1 && <RespuestaPalabra/>}
                {tipo==2 && <RespuestaArgumento/>}
                {tipo==3 && <RespuestaAlternativas/>}
                {tipo==4 && <RespuestaVF/>}
            </div>
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
