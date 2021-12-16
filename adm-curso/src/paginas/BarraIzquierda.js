import React from 'react';
import './BarraIzquierda.css';
import HomeIcon from '@mui/icons-material/Home';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import { useHistory } from 'react-router-dom';
import { useStore } from 'react-redux';
export default function BarraIzquierda() {
    const history = useHistory();
    const store = useStore();
    const goHome = ()=>{
        history.push('/');
    }
    const goNotas = ()=>{
        console.log(store.getState().idCourse);
        history.push('/VerNotas/'+store.getState().idCourse);
    }
    return (
        <div className="barra-izquierda">
            <button className="btn-header btnLogout" onClick={()=>{goHome()}}>
                <HomeIcon  sx={{fontSize:40}} />
                <div className="lblLogout"> Home</div>
            </button>
            {<button className="btn-header btnLogout" onClick={()=>{goNotas()}}>
                <NoteAltIcon  sx={{fontSize:40}} />
                <div className="lblLogout"> Ver Notas</div>
            </button>}
            <button className="btn-header btnLogout">
                <HomeIcon  sx={{fontSize:40}} />
                <div className="lblLogout"> Logout</div>
            </button>
            <button className="btn-header btnLogout">
                <HomeIcon  sx={{fontSize:40}} />
                <div className="lblLogout"> Logout</div>
            </button>
        </div>
    )
}
