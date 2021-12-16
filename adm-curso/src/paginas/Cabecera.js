import React,{useEffect,useState} from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './Cabecera.css';
import { useStore } from 'react-redux';
import {setHeaderContent} from '../feature/sessionSlice';
import NoteAltIcon from '@mui/icons-material/NoteAlt';
import LogoutIcon from '@mui/icons-material/Logout';

export default function Cabecera(props) {
    const history = useHistory();
    const store = useStore();
    const [titulo,setTitulo] = useState('');
    store.subscribe(()=>{
        setTitulo(store.getState().headerContent);
    });
    useEffect(()=>{
        setTitulo(store.getState().headerContent);
    },[])
    useEffect(()=>{
        setTitulo(store.getState().headerContent);
    },[store])
    const handleLogout = function (){
        axios.get('/login/endSession').then(()=>{
            props.initSession();
            history.push('/');
        });        
    };
    const verPerfil = ()=>{
        store.dispatch(setHeaderContent('Mi Perfil'));
        setTitulo(store.getState().headerContent);
        history.push('/VerPerfil')

    }
    return (
        <div className="cabecera">
            <div className="item-der">
                {titulo}
            </div>
            
            <div className="item-izq">
                <button className="btn-header btnLogout" onClick = {handleLogout}>
                    <LogoutIcon  fontSize="large" />
                    <div className="lblLogout"> Logout</div>
                </button>
                <button className="profile" onClick={()=>{verPerfil()}} >
                    <img className="imgProfile" src="https://source.unsplash.com/random"/>
                    <div className="lblmg"> VerPerfil</div>
                </button>
            </div>
            
            
        </div>
    )
}
