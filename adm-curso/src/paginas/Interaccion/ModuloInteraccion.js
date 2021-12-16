import React,{useState,useEffect,useContext} from 'react'
import { useHistory,useLocation, useParams } from "react-router-dom";
import {useLocationStorage} from "../../hook/useLocationStorage";
import MostrarPreguntas from "./MostrarPreguntas";
import ConfSesion from "./ConfSesion";
import './ModuloInteraccion.css'
import PreguntasPendientes from './PreguntasPendientes';
import { useStore } from 'react-redux';
import ListQuestion from './ListQuestion';
import { SalaContext } from '../../context/SalaContext';
import { types } from '../../types/types';
import { Socket } from 'socket.io-client';
import { SocketContext } from '../../context/SocketContext';
const atrib = ['Curso','Sesion'];
const curses = ['Curso1','Curso2','Curso3'];
function getHoraMin(){
    let now = new Date();
    return {
        hora: now.getHours(),
        min: now.getMinutes()
    }
}
const opt = ['Sesion','Preguntas'];
const usuarioTipo =['Profesor','Alumno'] 
//const socket = io('/');
export default function Interaccion(props) {
    const store = useStore();
    const history = useHistory();
    const location = useLocation();
    const [atributos,setAtributos] = useState({});
    
    const [preguntaActiva,setPreguntaActiva] = useState(false);
    const [activarPreguntas,setActivarPreguntas] = useState(false);
    const [ver,setVer] = useState(false);
    const [clase,setClase] = useState(curses[0]);
    const [inicio,setInicio] = useState(null);
    const [fin,setFin] = useState(null);
    const [sesion,setSesion] = useLocationStorage('sesion',{
        id:'',
        title:'cualquiera',
        activo:false
    })
    const [visible,setVisible] = useState(false);
    const [activo,setActivo] = useState(opt[1]);
    const [tipoUser,setTipoUser] = useState(usuarioTipo[0]);
    //////
    const [allQuestion,setAllQuestion] = useState([]);
    const {salaState,dispatch} = useContext(SalaContext);
    const {socket} = useContext(SocketContext);
    const [newSala,setNewSala] = useState('');
    useEffect(()=>{
        setTipoUser(store.getState().session.type);
    },[])
    
    const handleTitle = (e)=>{
        e.preventDefault();
        setSesion({...sesion,title:e.target.value});
    }
    const crearSesion = async ()=>{
        if(preguntaActiva){
            setVer(!ver);
            return;
        }
        setActivarPreguntas(!activarPreguntas);
        setPreguntaActiva(true);
        setInicio(getHoraMin());
        
        const res = await fetch('/sesion',{
            method: 'POST',
            body: JSON.stringify({
                title:sesion.title
            }),
            headers :{
                'Accept' : 'application/json',
                'Content-Type': 'application/json',
                //'Access-Control-Allow-Origin' : '*'
            } 
        });
        const data = await res.json();
        console.log(data);
        setSesion({id:data._id,title:data.title});
        history.push("/CrearPregunta/"+data._id);
    }
    
    function EndSesion(){
        if(!preguntaActiva) return;
        setPreguntaActiva(false);
        verEstadisticas();

    }
    function verEstadisticas(){
        history.push("/VerEstadisticas/"+salaState.sala.salaToken);
    }

    const verRespuesta = async()=>{
        
        const res = await fetch('/lastquestion/'+salaState.sala.salaToken);
        const data = await res.json();
        history.push("/VerRespuesta/"+data._id);
    }
    function otraPregunta(){
        history.push("/CrearPregunta/"+sesion.id);
    }
    function cambiarClase(e){
        console.log(e.target)
        
    }
    //Refactorring
    const changeVisible =()=>{
        setVisible(!visible);
    }
    const handleActivo = (e)=>{
        setActivo(e.target.id);
    }
    const conectSala = async() =>{
        const res = await fetch('/sesion/'+newSala);
        const sala = await res.json();
        dispatch({
            type: types.actualizarSala,
            payload:{
                ...salaState.sala,
                title:sala.title,
                salaToken:sala.salaToken,
                inicio:sala.inicio
            }
        })
        socket.emit('unirse-sala',sala.salaToken);
        console.log(sala);
    }
    
    const handleNewSala = (e)=>{
        setNewSala(e.target.value);
        
    }
    useEffect(()=>{
        socket.on('newQuestion',(data)=>{
            dispatch({
                type:types.actualizarPreguntas,
                payload:{id:data._id,valid:false}
            })
        })
        return ()=>{
            socket.off('newQuestion');
        }
    },[socket]);
    return (
        
        <div className="interaccion">
            
            <button className="actionModule"
            onClick={(e)=>changeVisible()}>{"<"}</button>
            
            {tipoUser == usuarioTipo[0]&& visible && <div className="contenido">
                <div className="containerSesion">{salaState.sala.title+ ": " + salaState.sala.salaToken}</div>
                <div className="containerOpt">
                {opt.map((e,i)=>{
                    return <>
                    <input className="rdOption" id={e} onChange={(e)=>handleActivo(e)}
                    type="radio" name="opt"  key={"opt"+i} defaultChecked={activo===e?true:false}/>
                    <label className="lblOption unselect"  htmlFor={e} key={"lbl"+i}>
                        {e}
                    </label>
                    </>
                })}
                </div>
                <div className="containerCtn">
                    {activo===opt[0] && <ConfSesion handleTitle = {handleTitle} sesion = {sesion}/>}
                    {activo===opt[1] && 
                        <>
                            <div>
                                <input type="text" name="sala" 
                                value={newSala} onChange={e=>handleNewSala(e)}/>
                                <button onClick ={()=>{conectSala()}}>Ir a Sala</button>
                            </div>
                            <ListQuestion/>
                        </>}
                    
                </div>
                <div className="containerAcesos">
                    <button onClick={otraPregunta}>Crear Pregunta</button>
                    <button onClick={(e) => {e.preventDefault(); verEstadisticas()}}>VerEstadisticas</button>
                    <button onClick={(e)=>{e.preventDefault(); verRespuesta()}}>VerRespuesta</button>
                </div>
            </div>}
            {tipoUser == usuarioTipo[1] && visible && <div className="contenido">
                <div className="subctn">Preguntas Pendientes</div>
                <div className="pendientesCtn">
                <div>
                    <input type="text" name="sala" 
                    value={newSala} onChange={e=>handleNewSala(e)}/>
                    <button onClick ={()=>{conectSala()}}>Ir a Sala</button>
                </div>
                <ListQuestion/>
                </div>
            </div>}
            
        </div>
    )
}