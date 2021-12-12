import React, { useEffect } from 'react';
import test  from './clases/clases.js'
import './Header.css'
import DehazeIcon from '@mui/icons-material/Dehaze';
import Avatar from './componentesBasicos/Avatar'
import { useState } from 'react';
import { useStore } from 'react-redux';
import SelectedListItem from '../componentes/componentesBasicos/MenuCurso';
import SelectedListAvatar from '../componentes/componentesBasicos/MenuAvatar.js';
import VerPerfil from '../componentes/Perfil';
//import { style } from '@mui/system';

export default function Header(props){ 
    const[menu,setMenu] = useState(false);
    const[avatar,setAvatar] = useState(false);
    const[avatar_style,setAvatar_style] = useState("FotoPerfil");
    const [user,setUser] = useState('');
    const [content,setContent] = useState('');
    const [idCurso,setIdCurso] = useState('');
    const store = useStore();

    store.subscribe(()=>{
        setUser(store.getState().session.user);
        setContent(store.getState().headerContent);
    });

    const handClick = (e) => {
        e.preventDefault()
        setMenu(!menu )}
    
    const imageClick = (e) => {
            e.preventDefault()
            setAvatar(!avatar)
        }     
    
    useEffect(()=>{
        console.log(store.getState());
        if(store.getState().headerContent){
            console.log(store.getState());
            setContent(store.getState().headerContent);
        }
        if (store.getState().session)
            setUser(store.getState().session.user);
    },[]);
        
    
        
        return ( 
        <div id="Header">
            <div id="Dehaze">
                    <button id="button" onClick={handClick}>
                        <DehazeIcon fontSize={'small'}/>
                    </button>
                    <div>
                        {menu?<SelectedListItem/>:false}
                    </div>
            </div>  
            <div id="List" onClick={imageClick}> 
                <div id="Foto">
                    <Avatar style={avatar_style} avatar={test['user'].getImagen()}/> 
                </div>
                <div id="menu-avatar">{avatar?<SelectedListAvatar curso_id={idCurso}   perfil={<VerPerfil/>}/>:false}</div>
            </div>
            <div id="NombreCurso">
                    <h1 id="hTitulo">{content}  {user}</h1>
            </div>
           </div>
        )
}

