import React,{useState,useEffect} from 'react'

import Canvas from './Canvas';
import RespuestaAlternativas from './Tipos/RespuestaAlternativas.js';
import RespuestaVF from './Tipos/RespuestaVF';
import RespuestaPalabra from './Tipos/RespuestaPalabra';
import './VerRespuesta.css';
import RespuestaArgumento from './Tipos/RespuestaArgumento';
import { respuestaAlternativas } from './Tipos/DatosRespuesta';
import Tipo from './Tipo';
import RespuestaPorAlumno from './RespuestaPorAlumno';
import { useParams } from 'react-router-dom';
import io from 'socket.io-client';
import { useContext } from 'react';
import { SocketContext } from '../../../../context/SocketContext';

const pregunta = "¿Cuanto es 1 +1 ?";
function answersToArray(respuestas){
    if(respuestas.length<1) return [];
    let rpta =respuestas[0].content;
    for(let i=1;i<respuestas.length;i++){
        rpta += " -" + respuestas[i].content;
    }
    return rpta? rpta.split("-"):[];
}

export default function VerRespuesta() {
    const {socket} = useContext(SocketContext);
    const params = useParams();
    const [pregunta,setPregunta] = useState({});
    const [respuestas,setRespuestas] = useState([]);
    const [dato,setDato] = useState({});
    useEffect(async () => {
        const res = await fetch('/QA/'+params.idPregunta);
        const {question,answers} = await res.json();
        //console.log(question);
        setRespuestas(answers || []);
        setPregunta(question);
    }, [params]);
    
    useEffect(()=>{
        socket.on('newAnswer',newAnswer =>{
            setDato(newAnswer);
        })
    },[socket])
    useEffect(()=>{
        setRespuestas([...respuestas,dato]);
    },[dato])
    return (
        <div className="ctnVerRespuesta" >
            <div className="ctnPregunta">
                {pregunta.content}
            </div>
            <div className={(pregunta.tipo==4?"ctnRespuestavf":"ctnRespuesta" + (pregunta.tipo?' rxa':""))}>
                {pregunta.tipo==1 && <RespuestaPalabra answers = {answersToArray(respuestas)}/>}
                {pregunta.tipo==2 && <RespuestaPorAlumno tipo={pregunta.tipo} answers={respuestas}/>}

                {pregunta.tipo==3 && <RespuestaAlternativas question={pregunta} answers={respuestas}/>}
                {pregunta.tipo==4 && <RespuestaVF question = {pregunta} answers={respuestas}/>}
            </div>
            {
                pregunta.tipo!=2 &&  <div className="rptaAlumno">
                    <RespuestaPorAlumno tipo={pregunta.tipo} answers={respuestas}/>
                </div>
            }
            
            
            
            
        </div>
    )
}
/**<Tipo cambio = {cambioTipo}/>
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
