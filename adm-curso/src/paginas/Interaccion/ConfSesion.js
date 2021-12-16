import React,{useContext,useState,useEffect} from 'react';
import { useStore } from 'react-redux';
import { SalaContext } from '../../context/SalaContext';
import { SocketContext } from '../../context/SocketContext';
import { types } from '../../types/types';

import './ConfSesion.css';
const handleTime =(time)=>{
    if(!time) return ""
    if(time===NaN) return ""
    const tiempo = new Date(time);
    
    return tiempo.getHours() +":" + tiempo.getMinutes();
}
const curses = ['Curso1','Curso2','Curso3'];
handleTime()
export default function ConfSesion(props) {
    const {salaState,dispatch} = useContext(SalaContext);
    const [cursos,setCursos] = useState([]);
    const store = useStore();
    const {socket} = useContext(SocketContext);
    const [selectCurse,setSelectCurse] = useState('');
    useEffect(async() => {
        const res = await fetch('/cursos/'+store.getState().session.user)
        const data = await res.json();
        setCursos(data);
    }, [])
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
        if(salaState.sala.title.length<2){
            console.log("Ingresa un titulo mas largoo");
            return ;
        }
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
            type:types.terminarSala,
            payload:{
                ...salaState.sala,
                title:'',
                salaToken:'',
                inicio:'',
                fin:'',
                
            }
        });

    }
    const changeCurso = (e)=>{
        socket.emit('change-curso', salaState.sala.salaToken,e.target.value);
        dispatch({
            type: types.actualizarCurso,
            payload:e.target.value
        })
    }
    return (
        <div>
            <fieldset className="ctnClassConf">
                <legend>Curso</legend>
                <select name = "cursos"  onChange={(e)=>{changeCurso(e)}}>
                    <option name = "cursos" key={"CursosSelectd"} value={""} selected={salaState.curso === ''}>
                        {""}
                    </option>
                    {cursos.map((e,i)=>{
                        return <option name = "cursos" key ={"CursoSelected"+i} 
                        value={e._id} selected={salaState.curso  === e._id}>
                            {e.nombre}
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
                    <div>Inicio: {handleTime(salaState.sala.inicio)}</div>
                    <div>Fin: {handleTime(salaState.sala.fin)}</div>
                </div>
                
                <div className="ctnActionConf">
                    {salaState.sala.salaToken==="" && <button onClick = {()=>crearSala()}>Crear Sala</button>}
                    {salaState.sala.salaToken!=="" && <button onClick = {()=>terminarSala()}>Terminar Sesion</button>}
                </div>
                
            </fieldset>
            
        </div>
    )
}
