import React,{useContext,useState,useEffect} from 'react'
import { SocketContext } from '../../context/SocketContext';
import { useHistory } from 'react-router-dom';
import { useStore } from 'react-redux';
import { SalaContext } from '../../context/SalaContext';
import { types } from '../../types/types';
import './ListQuestion.css';
export default function ListQuestion() {
    //const {socket} = useContext(SocketContext);
    const history = useHistory(); 
    const store = useStore();
    const {salaState,dispatch} = useContext(SalaContext);
    useEffect(async()=>{
        if(salaState.sala.salaToken==='') return;
        if(salaState.pedido) return;
        
        const res = await fetch('/questionsUS/'+salaState.sala.salaToken+"/"+store.getState().session.user);
        const data = await res.json();
        //setQuestions(data.reverse());
        dispatch({
            type:types.iniciarPreguntas,
            payload:data?data.reverse():[]
        })
    },[salaState]);
    
    
    const handleClick = (id,valid)=>{
        //valid sigfica que la pregunta ya se realizo por el usuario
        //console.log(e.target.id);
        if(valid) {
            history.push("/VerRespuesta/"+id);
            return;
        };
        const goTo = store.getState().session.type==='Profesor'?'Respuesta':'Pregunta';
        history.push("/Ver"+goTo+"/"+id);
    }
    
    /*
    useEffect(()=>{
        socket.on('comprobar-usuario', (data)=>{
            if(data.respuesta) history.push("/VerRespuesta/"+data.idQuestion);
            else history.push("/VerPregunta/"+data.idQuestion);
        })
        return ()=>{
            socket.off('comprobar-usuario');
        }
    },[socket])*/
    return (
        <>

            {salaState.preguntas.map((e,i)=>{
                return <div className={"indPreguntas" + " " + (e.valid?"colorValid":"")} key={"Question"+i}
                onClick={event=>{event.preventDefault(); handleClick(e.id,e.valid)}}>
                    {"Pregunta "+(salaState.preguntas.length - i)}
                </div>
            })}
        </>
    )
}
