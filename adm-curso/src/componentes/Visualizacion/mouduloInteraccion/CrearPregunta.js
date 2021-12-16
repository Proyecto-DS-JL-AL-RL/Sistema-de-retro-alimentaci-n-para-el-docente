import React,{useContext,useState,useEffect} from 'react'
import './estiloPreguntas.css'
import {tipos,alterIni} from './Datos.js';
import ResponderPregunta from './ResponderPregunta';
import CrearAlternativas from './CrearAlternativas';
import { useHistory } from 'react-router-dom';
import { SocketContext } from '../../../context/SocketContext';
import { useLocationStorage } from '../../../hook/useLocationStorage';
import { useStore } from 'react-redux';
import { SalaContext } from '../../../context/SalaContext';
export default function CrearPregunta() {
    const history = useHistory();
    const [pregunta,setPregunta] = useState('');
    const [archivo,setArchivo] = useState(false);
    const [tipo,setTipo] = useState(3);
    const [alternativas,setAlternativas] = useState(alterIni);
    const [correct,setCorrect] = useState('0');
    const {socket} = useContext(SocketContext);
    const store = useStore();
    const {salaState} = useContext(SalaContext);
    const changeAlternativas= (alt) =>{
        setAlternativas(alt);
    }
    const changePregunta= (e) =>{
        setPregunta(e.target.value);
    }
    const changeArchivo = (e) =>{
        setArchivo(!archivo);
    }
    const changeTipo = (e) =>{
        setTipo(e.target.id);
    }
    const changeCorrect = (index) =>{
        setCorrect(index);
    }
    const crearPregunta = async (e) =>{
        e.preventDefault();
        let sol= '';
        if(tipo === 3 || tipo===4) sol = correct;
        const dataQuestion = {
            content: pregunta,
            tipo:tipo,
            options : tipo ===3? alternativas:[],
            file:archivo,
            correct:sol
        }
        const codigo = store.getState().session.user;
        console.log(codigo);
        socket.emit('newQuestion',dataQuestion,codigo,salaState.sala.salaToken);
        //const data  = await fetch('/lastquestion/'+salaState.sala.salaToken);
        //const res = await  data.json();
        //console.log(res,"last");
        //history.push("/VerRespuesta/"+res._id);
    }
    useEffect(()=>{
        socket.on('allQuestion',(data)=>{
            history.push("/VerRespuesta/"+data._id)
        })
        return ()=>{
            socket.off('allQuestion');
        }
    },[socket]);
    useEffect(()=>{
        socket.on('problemas-question',(data)=>{
            alert(data.mensaje);
        })
        return ()=>{
            socket.off('problemas-question');
        }
    },[socket])
    return (
        <div className="ctnCont">
            <form>
                <label className="itmform lblform">Pregunta:</label>
                <textarea className="itmform txtform"
                type="text" 
                placeholder="Ingrese una pregunta"
                onChange={changePregunta}
                value={pregunta}
                ></textarea>
                <label className="itmform lblform">Tipo de Respuesta:</label>
                <div className="ctnTipos">
                    {tipos.map((e,i)=>{
                        return <div key={"Eleciones"+i}>
                        <input className="check" id={e.id} 
                        type="radio" name="tipos" onChange={changeTipo}
                         defaultChecked={e.id==tipo?true:false} key={i}/>
                        <label className="checklbl unselect"  htmlFor={e.id} key={i}>
                            {e.descp}
                        </label>
                        </div>
                    })}
                </div>
                {tipo==3 && <CrearAlternativas 
                alternativas = {alternativas}
                changeAlt={changeAlternativas} 
                changeCorrect = {changeCorrect}
                correct = {correct}
                /> }
                {tipo ==4 && <div className="ctnVF">
                    <div className={"binAlt btnAlt "+ (parseInt(correct)===0?"btnac":"btndes")} 
                    onClick={()=>{changeCorrect(0)}}>V</div>
                    <div  className={"binAlt btnAlt "+ (parseInt(correct)===1?"btnac":"btndes")}
                    onClick={()=>{changeCorrect(1)}}>F</div>
                     </div>   
                }
                <div className="ctnArchivo">
                    <input className="check1" id="checkarchivo" 
                    type="checkbox" onChange={changeArchivo}/>
                    <label className="check1lbl unselect" htmlFor="checkarchivo">
                        AgregarArchivo
                    </label>
                    <button className="btnCrear" onClick={(e)=>crearPregunta(e)}>Crear</button>
                </div>
                <fieldset className="itmform lblform">
                    <legend>Previsualización:</legend>
                    <div className="ctnPrevius">
                        <ResponderPregunta 
                        pregunta={pregunta} 
                        archivo={archivo}
                        tipo={tipo}
                        alternativas = {alternativas}
                        />
                    </div>
                </fieldset>
                
            </form>
        </div>
    )
}
