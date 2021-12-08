import React,{useContext,useState,useEffect} from 'react'
import { SocketContext } from '../../context/SocketContext';
import { useLocationStorage } from '../../hook/useLocationStorage';
import { useHistory } from 'react-router-dom';
export default function ListQuestion() {
    const {socket} = useContext(SocketContext);
    const [sesion,setSesion] = useLocationStorage('sesion',{});
    const [questions,setQuestions] = useState([]);
    const history = useHistory();
    const [dato,setDato] =useState(''); 
    useEffect(async()=>{
        const res = await fetch('/questions/'+sesion.id);
        const data = await res.json();
        setQuestions(data.reverse());
    },[]);
    
    
    const handleClick = (e)=>{
        console.log(e.target.id);
        history.push("/VerRespuesta/"+e.target.id);
    }
    useEffect(()=>{
        socket.on('allQuestion',(data)=>{
            setDato(data);
        })
        return ()=>{
            socket.off('allQuestion');
        }
    },[socket]);
    useEffect(()=>{
        setQuestions([dato,...questions]);
    },[dato])
    return (
        <>
            {questions.map((e,i)=>{
                return <div className="indPreguntas" key={"Question"+i} id={e} onClick={e=>handleClick(e)}>
                    {"Pregunta "+(questions.length - i)}
                </div>
            })}
        </>
    )
}
