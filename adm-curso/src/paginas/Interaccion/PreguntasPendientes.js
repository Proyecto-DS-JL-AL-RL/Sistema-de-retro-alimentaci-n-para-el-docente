import React,{useState,useEffect} from 'react'
import { useHistory } from 'react-router-dom';
export default function PreguntasPendientes(props) {
    const [preguntas,setPreguntas] = useState([]);
    const history = useHistory();
    useEffect(async() =>{
        const res = await fetch('/questions/'+props.idSesion);
        const questions = await res.json();
        setPreguntas(questions.reverse());
    },[]);
    const handleClick = (e)=>{
        console.log(e.target.id);
        history.push("/VerPregunta/"+e.target.id);
    }
    return (
        <div className="ctnPreguntasPendientes">
            {preguntas.map((e,i)=>{
                return <div className="indPreguntas" key={"Question"+i} id={e} onClick={e=>handleClick(e)}>
                    {"Pregunta "+(preguntas.length - i)}
                </div>
            })}
        </div>
    )
}
