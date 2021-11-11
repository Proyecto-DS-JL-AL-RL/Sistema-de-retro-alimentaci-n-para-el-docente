import React,{useState,useEffect} from 'react'
import { useHistory,useLocation } from "react-router-dom";
import './ModuloInteraccion.css'
const atrib = ['Curso','Sesion'];
const curses = ['Curso1','Curso2','Curso3'];
function getHoraMin(){
    let now = new Date();
    return {
        hora: now.getHours(),
        min: now.getMinutes()
    }
}
export default function Interaccion() {
    const history = useHistory();
    const location = useLocation();
    const [atributos,setAtributos] = useState({});
    const [preguntaActiva,setPreguntaActiva] = useState(false);
    const [activarPreguntas,setActivarPreguntas] = useState(false);
    const [ver,setVer] = useState(false);
    const [clase,setClase] = useState(curses[0]);
    const [inicio,setInicio] = useState(null);
    const [fin,setFin] = useState(null);
    useEffect(() =>{
        setInicio(getHoraMin());
    },[])
    const changeActivarPreguntas = (e)=>{
        if(preguntaActiva){
            setVer(!ver);
            return;
        }
        setActivarPreguntas(!activarPreguntas);
        setPreguntaActiva(true);
        setInicio(getHoraMin());
        history.push("/CrearPregunta");
        setVer(true);
    }
    function verEstadisticas(){
        history.push("/VerEstadisticas");
    }
    function EndSesion(){
        if(!preguntaActiva) return;
        setPreguntaActiva(false);
        verEstadisticas();

    }

    function verRespuesta(){
        history.push("/VerRespuesta");
    }
    function otraPregunta(){
        history.push("/CrearPregunta");
    }
    function cambiarClase(e){
        console.log(e.target)
        
    }
    return (
        
        <div className="interaccion">
            
            <button className="actionModule"
            onClick={(e)=>changeActivarPreguntas(e)}>{"<"}</button>
            <div className="contenido">
                
                {preguntaActiva && ver  &&<><fieldset>
                    <legend>Curso</legend>
                    <select name = "cursos" onChange={e=>cambiarClase(e)} >
                        {curses.map((e,i)=>{
                            return <option  key ={i} value={e}>
                                {e}
                            </option>
                        })}
                    </select>
                    <button>Cambiar Clase</button>
                </fieldset>
                <fieldset>
                    <legend>Sesión</legend>
                    <div>{"Inicio  : " + inicio.hora + ":" + (inicio.min>9?'':0) +inicio.min}</div>
                    <div>{"Fin: "}</div>
                    <button onClick={EndSesion}>Terminar Sesión</button>
                </fieldset>
                <div clas></div>
                <button onClick={otraPregunta}>Otra Pregunta</button>
                <button onClick={verEstadisticas}>VerEstadisticas</button>
                <button onClick={verRespuesta}>VerRespuestas</button>
                </>}
                
            </div>
        </div>
    )
}
