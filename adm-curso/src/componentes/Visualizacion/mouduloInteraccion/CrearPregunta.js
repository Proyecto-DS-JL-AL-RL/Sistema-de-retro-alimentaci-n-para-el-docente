import React,{useContext,useState} from 'react'
import './estiloPreguntas.css'
import {tipos,alterIni} from './Datos.js';
import ResponderPregunta from './ResponderPregunta';
import CrearAlternativas from './CrearAlternativas';
import { useHistory } from 'react-router-dom';
import { SocketContext } from '../../../context/SocketContext';
import { useLocationStorage } from '../../../hook/useLocationStorage';
export default function CrearPregunta() {
    const history = useHistory();
    const [pregunta,setPregunta] = useState('');
    const [archivo,setArchivo] = useState(false);
    const [tipo,setTipo] = useState(3);
    const [alternativas,setAlternativas] = useState(alterIni);
    const {socket} = useContext(SocketContext);
    const [sesion,setSesion] = useLocationStorage('sesion',[]);
    
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
    const crearPregunta = async (e) =>{
        e.preventDefault();
        const dataQuestion = {
            content: pregunta,
            tipo:tipo,
            options : tipo ===3? alternativas:[],
            file:archivo,
            acertada:0
        }
        socket.emit('newQuestion',dataQuestion);
        const data  = await fetch('/lastquestion/'+sesion.id);
        const res = await  data.json();
        console.log(res);
        history.push("/VerRespuesta/"+res._id);
    }
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
                        return <>
                        <input className="check" id={e.id} 
                        type="radio" name="tipos" onChange={changeTipo}
                         defaultChecked={e.id==tipo?true:false} key={i}/>
                        <label className="checklbl unselect"  htmlFor={e.id} key={i}>
                            {e.descp}
                        </label>
                        </>
                    })}
                </div>
                {tipo==3 && <CrearAlternativas 
                alternativas = {alternativas}
                changeAlt={changeAlternativas} 
                /> }
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
