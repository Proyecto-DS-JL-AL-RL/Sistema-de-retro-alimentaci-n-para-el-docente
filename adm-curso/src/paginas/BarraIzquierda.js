import React,{useState,useEffect} from 'react';
import './BarraIzquierda.css';
import HomeIcon from '@mui/icons-material/Home';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import AddBoxIcon from '@mui/icons-material/AddBox';
import AddIcon from '@mui/icons-material/Add';
import { useHistory } from 'react-router-dom';
import { useStore } from 'react-redux';
export default function BarraIzquierda() {
    const history = useHistory();
    const store = useStore();
    const [user,setUser] = useState(null);
    const [curso,setCurso] = useState(null);
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
    }
    const goNotas = ()=>{
        console.log(store.getState().idCourse);
        history.push('/VerNotas/'+store.getState().idCourse);
    }
    const newCurse = ()=>{
        history.push('/NuevoCurso');
    }
    const joinCurse = ()=>{
        history.push('/registrarse');
    }
    return (
        <div className="barra-izquierda">
            <button className="btn-header btnLogout" onClick={()=>{goHome()}}>
                <HomeIcon  sx={{fontSize:40}} />
                <div className="lblLogout"> Home</div>
            </button>
            {curso && <button className="btn-header btnLogout" onClick={()=>{goNotas()}}>
                <NoteAltIcon  sx={{fontSize:40}} />
                <div className="lblLogout"> Ver Notas</div>
            </button>}
            {user==='Alumno' && 
            <button className="btn-header btnLogout"onClick={()=>{joinCurse()}} >
                <AddBoxIcon  sx={{fontSize:40}} />
                <div className="lblLogout"> Unirse Curso</div>
            </button>}
            {user==='Profesor' &&  
            <button className="btn-header btnLogout" onClick={()=>{newCurse()}}>
                <AddIcon  sx={{fontSize:40}} />
                <div className="lblLogout"> Nuevo Curso</div>
            </button>}
        </div>
    )
}
