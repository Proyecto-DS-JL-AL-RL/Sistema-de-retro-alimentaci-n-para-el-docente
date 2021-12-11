import React,{useContext} from 'react';
import { useStore } from 'react-redux';
import { SalaContext } from '../../context/SalaContext';
import { SocketContext } from '../../context/SocketContext';
import { types } from '../../types/types';

import './ConfSesion.css';
const curses = ['Curso1','Curso2','Curso3'];

export default function ConfSesion(props) {
    const {salaState,dispatch} = useContext(SalaContext);
    const store = useStore();
    const {socket} = useContext(SocketContext);
    const crearSala = async()=>{
        /*const res = await fetch('/sesionUser/'+store.getState().session.user,{
            method : 'PUT',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify({
                salaToken:'hola'
            })
        });*/
        if(salaState.sala.salaToken!=='') return;
        const title = salaState.sala.title;
        const idUser = store.getState().session.user;
        const res = await fetch('/sesion',{
            method:'POST',
            headers:{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body:JSON.stringify({
                idUser,title
            })
        })
        const data = await res.json();

        socket.emit('unirse-sala',data.salaToken);
        dispatch({
            type: types.actualizarSala,
            payload:{
                ...salaState.sala,
                inicio: (new Date()).toString(),
                salaToken: data.salaToken
            }
        })
    }
    const handleTitle = (e) =>{
        //console.log(e.target.value);
        dispatch({
            type: types.actualizarSala,
            payload:{
                ...salaState.sala,
                title:e.target.value,
                
            }
        })
    }
    const actualizarTitle = ()=>{
        if(salaState.sala.salaToken==='') return;
        socket.emit('actualizar-sala', salaState.sala.title,salaState.sala.salaToken);
    }
    const terminarSala = async() =>{
        if(salaState.sala.salaToken==='') return;
        socket.emit('terminar-sala',salaState.sala.salaToken);
        dispatch({
            type:types.actualizarSala,
            payload:{
                ...salaState.sala,
                title:'',
                salaToken:'',
                inicio:'',
                fin:(new Date()).toString,
                
            }
        });

    }
    return (
        <div>
            <fieldset className="ctnClassConf">
                <legend>Curso</legend>
                <select name = "cursos"  >
                    {curses.map((e,i)=>{
                        return <option  key ={"Curso"+i} value={e}>
                            {e}
                        </option>
                    })}
                </select>
                <button>Cambiar Clase</button>
            </fieldset>
            <fieldset className="ctnSesionConf">
                <legend>Sesion</legend>
                <div>
                    <input text="text" value={salaState.sala.title} 
                    onChange = {(e)=>handleTitle(e)} onBlur={()=>actualizarTitle()}/>
                    <div>Inicio: {salaState.sala.inicio}</div>
                    <div>Fin: {salaState.sala.fin}</div>
                </div>
                
                <div className="ctnActionConf">
                    <button onClick = {()=>crearSala()}>Crear Sala</button>
                    <button onClick = {()=>terminarSala()}>Terminar Sesion</button>
                </div>
                
            </fieldset>
            
        </div>
    )
}
