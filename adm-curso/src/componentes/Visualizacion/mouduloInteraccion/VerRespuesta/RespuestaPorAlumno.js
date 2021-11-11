import React,{useState,useEffect} from 'react'
import { respuestaAlumno } from '../VerEstadisticas/DatosRA';
import { palabras } from './Tipos/DatosRespuesta';
import { frases } from './Tipos/DatosRespuesta';
export default function RespuestaPorAlumno(props) {
    const [tipo,setTipo] = useState(props.tipo);
    
   
        {console.log("XD",props.tipo)}
        
   
    return (
        <table className='tbRespuestas'>
            <thead className="tcabecera">
                <tr className="headerFijo">
                    <th>Num</th>
                    <th>Alumno</th>
                    <th>Respuesta</th>
                    
                </tr>
            </thead>
            <tbody className="tcuerpo">
                
                {respuestaAlumno.map((e,i)=>{
                const rndInt = Math.floor(Math.random()*6);
                const rndErr = Math.floor(Math.random()*(Math.min(rndInt,4)));
                const vfa = Math.floor(Math.random()*2)===1?"V":"F";
                return <tr className="contItem" key={e.id}>
                    <td>{i+1}</td>
                    <td>{e.nombre}</td>
                    
                    <td>{(props.tipo==4 && vfa) ||
                        (props.tipo==3 && String.fromCharCode(Math.floor(Math.random()*5 + 97)))||
                        (props.tipo==2 && frases[Math.floor(Math.random()*frases.length)] )
                        ||(props.tipo == 1 && palabras[Math.floor(Math.random()*palabras.length)])
                        
                        }</td>
                    </tr>
                })}
            </tbody>
            

        </table>
    )
}
