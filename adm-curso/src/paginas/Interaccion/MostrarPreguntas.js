import React,{useState,useEffect,useContext} from 'react'
import { useHistory } from 'react-router-dom';
import { SocketContext } from '../../context/SocketContext';
import "./MostrarPreguntas.css";
export default function MostrarPreguntas(props) {
    const [preguntas,setPreguntas] = useState([]);
    const history = useHistory();
    const {socket} = useContext(SocketContext);
    useEffect(async () => {
        await socket.on('allQuestion',data=>{
            console.log(data,"XD");
        })
    },[socket])
    const handleClick = (e)=>{
        console.log(e.target.id);
        history.push("/VerRespuesta/"+e.target.id);
    }
    return (
        <div className="alumnoPreguntas">
            {console.log(preguntas,'pre')}
            {props.allQuestion.map((e,i)=>{
                return <div className="indPreguntas" key={"Question"+i} id={e} onClick={e=>handleClick(e)}>
                    {"Pregunta "+(props.allQuestion.length - i)}
                </div>
            })}
        </div>
    )
}
/*
useEffect(async() =>{
        
        const res = await fetch('/questions/'+props.idSesion);
        const questions = await res.json();
        console.log()
        setPreguntas(questions.reverse());
    },[]);
 */