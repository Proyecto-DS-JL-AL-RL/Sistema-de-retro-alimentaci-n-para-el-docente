import React from 'react'
import { respuestaAlumno,Estados} from './DatosRA';
import './RespuestaAlumno.css';
function clasificar(totalPregunta,totalRespuestas,erradas,totalDirectas){
    if(totalRespuestas ==0) return 'Ausente';
    if((totalDirectas - erradas)/totalDirectas<0.3) return 'Necesita Ayuda';
    let relativo  = totalPregunta/totalRespuestas ;
    if(totalPregunta/totalRespuestas>0.5){
        return 'Activo';
    }
    else if(totalPregunta/totalRespuestas>0.3){
        return 'Pasivo';
    }
    else if(relativo<=0.3) return 'Distraido';
    
}
export default function RespuestaAlumno() {
    return (
        
        
        <table className='tbRespuestas'>
            <thead className="tcabecera">
                <tr className="headerFijo">
                    <th>Num</th>
                    <th>Alumno</th>
                    <th>Estado</th>
                    <th>Respuestas</th>
                    <th>Erradas</th>
                </tr>
            </thead>
            <tbody className="tcuerpo">
                
                {respuestaAlumno.map((e,i)=>{
                const rndInt = Math.floor(Math.random()*6);
                const rndErr = Math.floor(Math.random()*(Math.min(rndInt,4)));
                   
                return <tr className="contItem" key={e.id}>
                    <td>{i+1}</td>
                    <td>{e.nombre}</td>
                    <td> {clasificar(5,rndInt,rndErr,4)}</td>
                    <td>{rndInt}</td>
                    <td>{rndErr}</td>
                </tr>
                })}
            </tbody>
            

        </table>
        
        
           
       
    )
}
