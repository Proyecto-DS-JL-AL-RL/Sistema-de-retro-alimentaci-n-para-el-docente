import React,{useState,useEffect,useContext} from 'react';
import './BarraIzquierda.css';
import HomeIcon from '@mui/icons-material/Home';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddIcon from '@mui/icons-material/Add';
import TaskAltIcon from '@mui/icons-material/TaskAlt';
import { useHistory } from 'react-router-dom';
import { useStore } from 'react-redux';
import Interaccion from './Interaccion/ModuloInteraccion';
import { SocketContext } from '../context/SocketContext';
import { types } from '../types/types';
import { SalaContext } from '../context/SalaContext';
export default function BarraIzquierda() {
    const history = useHistory();
    const store = useStore();
    const [user,setUser] = useState(null);
    const [curso,setCurso] = useState(null);
    const [visible,setVisible] = useState(false);
    const {salaState,dispatch} = useContext(SalaContext);
    const {socket} = useContext(SocketContext)
    useEffect(() => {
        setCurso(store.getState().idCourse);
        setUser(store.getState().session.type)
    },[]);
    store.subscribe(()=>{
        setCurso(store.getState().idCourse);
        setUser(store.getState().session.type);
    });
    const goHome = ()=>{
        history.push('/');
        setVisible(false);
    }
    const goNotas = ()=>{
        history.push('/VerNotas/'+store.getState().idCourse);
        setVisible(false);
    }
    const newCurse = ()=>{
        history.push('/NuevoCurso');
        setVisible(false);
    }
    const joinCurse = ()=>{
        history.push('/registrarse');
        setVisible(false);
    }
    const changeVisible = () => {
        setVisible(!visible);
    }
    
    return (
        <div className="barra-izquierda">
            <button className="btn-barra btnLogout" onClick={()=>{goHome()}}>
                <HomeIcon  sx={{fontSize:40}}  />
                <div className="lblLogout"> Home</div>
            </button>
            <div className="bar-ctn-interaccion">
                <button className={"btn-barra btnLogout "+(visible?'visible':'')} onClick={()=>{changeVisible()}}>
                    <TaskAltIcon sx={{fontSize:40}} />
                    <div className="lblLogout"> Nueva Sesion</div>
                </button>
                <Interaccion visible={visible}/>
            </div>
            
            {user==='Alumno' && 
            <button className="btn-barra btnLogout"onClick={()=>{joinCurse()}} >
                <AddBoxIcon  sx={{fontSize:40}} />
                <div className="lblLogout"> Unirse Curso</div>
            </button>}
            {user==='Profesor' &&  
            <button className="btn-barra btnLogout" onClick={()=>{newCurse()}}>
                <AddIcon  sx={{fontSize:40}} />
                <div className="lblLogout"> Nuevo Curso</div>
            </button>}
            {curso && <button className="btn-barra btnLogout" onClick={()=>{goNotas()}}>
                <NoteAltIcon  sx={{fontSize:40}} />
                <div className="lblLogout"> Ver Notas</div>
            </button>}
        </div>
    )
}
