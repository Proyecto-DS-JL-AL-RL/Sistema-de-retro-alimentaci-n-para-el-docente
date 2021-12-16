import React, { useEffect } from 'react';
import test  from './clases/clases.js'
import './Header.css'
import DehazeIcon from '@mui/icons-material/Dehaze';
import Avatar from './componentesBasicos/Avatar'
import { useState } from 'react';
import { useStore } from 'react-redux';
import SelectedListItem from '../componentes/componentesBasicos/MenuCurso';
import SelectedListaInicio from './componentesBasicos/ListaIncio.js';
import SelectedListIncio from './componentesBasicos/MenuInicio.js';
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
        const stateS = store.getState();
        console.log(stateS);
        if(stateS.headerContent){
            console.log(stateS);
            setContent(stateS.headerContent);
        }
        if (stateS.session)
            setUser(stateS.session.user);
        if (stateS.idCourse)
            setIdCurso(stateS.idCourse)
    },[]);
    //Boton Azul   
    const getSelectedItemMenu = () => {
        if (store.getState().idCourse)
            return <SelectedListItem/>
        else
            return <SelectedListaInicio/>
    }
    //Derecha similar a Perfil
    const getSelectedItemAvatar = () => {
        if (store.getState().idCourse)
            return <SelectedListAvatar curso_id={store.getState().idCourse}   perfil={<VerPerfil/>}/>
        else
            return  <SelectedListIncio />
    }
        
        return ( 
        <div id="Header">
            <div id="Dehaze">
                    <button id="button" onClick={handClick}>
                        <DehazeIcon fontSize={'small'}/>
                    </button>
                    <div>
                        {menu?getSelectedItemMenu():false}
                    </div>
            </div>  
            <div id="List" onClick={imageClick}> 
                <div id="Foto">
                    <Avatar style={avatar_style} avatar={'https://source.unsplash.com/random'}/> 
                </div>
                <div id="menu-avatar">{avatar?getSelectedItemAvatar():false}</div>
            </div>
            <div id="NombreCurso">
                    <h1 id="hTitulo">{content}  {user}</h1>
            </div>
           </div>
        )
}

