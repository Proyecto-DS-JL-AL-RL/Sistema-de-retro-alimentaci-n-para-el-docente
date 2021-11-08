import React from 'react'
import {frases} from './DatosRespuesta.js';
import './RespuestaArgumento.css';
export default function RespuestaArgumento() {
    return (
        <div className="ctnRespuesta">
            {frases.map((e)=>{
                return <>
                    <div className="itemFrase">
                        <div className="ctnFrase">
                            {e}
                        </div>
                        <div className="ctnAutor">
                            {"XDXD"}
                        </div>
                    
                    </div>
                    
                </>
            })}
        </div>
    )
}
