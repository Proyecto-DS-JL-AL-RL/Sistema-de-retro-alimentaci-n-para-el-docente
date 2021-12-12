import React,{useContext,useState,useEffect} from 'react'
import { SocketContext } from '../../context/SocketContext';
import { useHistory } from 'react-router-dom';
import { useStore } from 'react-redux';
import { SalaContext } from '../../context/SalaContext';
import { types } from '../../types/types';
export default function ListQuestion() {
    const {socket} = useContext(SocketContext);
    const history = useHistory(); 
    const store = useStore();
    const {salaState,dispatch} = useContext(SalaContext);
    useEffect(async()=>{
        if(salaState.sala.salaToken==='') return;
        const res = await fetch('/questions/'+salaState.sala.salaToken);
        const data = await res.json();
        //setQuestions(data.reverse());
        dispatch({
            type:types.iniciarPreguntas,
            payload:data.reverse()
        })
    },[salaState.sala.salaToken]);
    
    
    const handleClick = (e)=>{
        //console.log(e.target.id);
        const direction = store.getState().session.type==='Profesor'?'Respuesta':'Pregunta';
        history.push("/Ver"+direction+"/"+e.target.id);
    }
    useEffect(()=>{
        socket.on('newQuestion',(data)=>{
            dispatch({
                type:types.actualizarPreguntas,
                payload:data._id
            })
        })
        return ()=>{
            socket.off('newQuestion');
        }
    },[socket]);
    return (
        <>
            {salaState.preguntas.map((e,i)=>{
                return <div className="indPreguntas" key={"Question"+i} id={e} onClick={e=>handleClick(e)}>
                    {"Pregunta "+(salaState.preguntas.length - i)}
                </div>
            })}
        </>
    )
}
