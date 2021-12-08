import React,{useState,useEffect,useContext} from 'react'
import { useHistory,useParams } from 'react-router-dom';
import './VerPregunta.css';
import VerTipo1 from './VerRespuesta/VerTipo/VerTipo1';
import { SocketContext } from '../../../context/SocketContext';
function mensaje(tipo){
    if(tipo==1){
        return 'Describa con una palabra';
    }
    if(tipo==2){
        return 'Argumente';
    }
    if(tipo==3){
        return 'Seleccione';
    }
    if(tipo==4){
        return 'Verdadero o falso';
    }
}
function aleatorio(arr){
    let n = arr.length;
    let au = []
    
    for(let i=0;i<n;i++){
        
        au.push({...arr[i],letra: String.fromCharCode(97+i)});
    }
    return au;
}
export default function VerPregunta() {
    const params = useParams();
    const history = useHistory();
    const [pregunta,setPregunta] = useState({});
    const [content,setContent] = useState('');
    const {socket} = useContext(SocketContext);
    useEffect(async () => {
        const res = await fetch('/question/'+params.idPregunta);
        const question = await res.json();
        console.log(question);
        setPregunta(question);
    }, [params])
    
    const enviarRespuesta = async ()=>{
        const res = await fetch('/answer/'+ params.idPregunta,{
            method:'POST',
            body: JSON.stringify({
                content
            }),
            headers:{
                'Accept' : 'application/json',
                'Content-Type': 'application/json'
            }
        });
        const answer = await res.json();

        socket.emit('newAnswer',answer);
        history.push('/VerRespuesta/'+params.idPregunta);
    }
    const handletipo2 = (e) =>{
        setContent(e.target.value);
    }
    const handlePregunta = (str)=>{
        setContent(str);   
    }
    const handleTipo3 = (i)=>{
        setContent(i.toString());
    }
    const handleTipo4 = (i) =>{
        setContent(i.toString());
    }

    return (
        <div className="container">
            {mensaje(pregunta.tipo)}
            <div>
                <p>{pregunta.content}</p>
            </div>
            <div className="ctnPreguntaAlumno">
            {pregunta.tipo==1 && 
            <VerTipo1 handlePregunta={handlePregunta}/>}
            {pregunta.tipo==2 && 
            <textarea className="itmform" type="text" placeholder="Ingresa tu Argumento" 
            value={content} onChange={(e)=>handletipo2(e)}></textarea>}
            {   
                pregunta.tipo == 3 &&
                aleatorio(pregunta.options).map((alt,i) =>{
                    return <>
                    <div className='itmalt' onClick={()=>handleTipo3(i)} key = {i} value={i}>
                        { alt.letra + ") " +alt.cont}</div></>
                })
            }
            {
                pregunta.tipo == 4 &&
                <>
                <div onClick = {() => handleTipo4(0)}>a) V</div>
                <div onClick = {() => handleTipo4(1)}>b) F</div>
                </>
            }
            {pregunta.archivo && <button>Subir Archivo</button>}
            <button className="enviarRpta" onClick = {e=>enviarRespuesta()}>Enviar Respuesta</button>
            </div>
            
        </div>
        
    )
}
/**
 * <div>{mensaje(props.tipo)}</div>
            <div className="ctnPregunta">
                <p>
                    {props.pregunta==''?'Aún no se ingresa una pregunta':props.pregunta}
                </p>
                
            </div>
            
            {props.tipo==1 && 
            <> <input className = "itmform" type="text"/>
            <input className = "itmform" type="text"/>
            <input className = "itmform" type="text"/>
            </>}
            {props.tipo==2 && <textarea className="itmform" type="text"></textarea>}
            
            {   
                props.tipo == 3 &&
                aleatorio(props.alternativas).map(alt =>{
                    return <>
                    <label className='itmalt'>{ alt.letra + ") " +alt.cont}</label><br/></>
                })
            }
            {
                props.tipo == 4 &&
                
                <>
                <div>a) V</div>
                <div>b) F</div>
                </>
            }
            {props.archivo && <button>Subir Archivo</button>}
            <button className="enviarRpta">Enviar Respuesta</button>
 */