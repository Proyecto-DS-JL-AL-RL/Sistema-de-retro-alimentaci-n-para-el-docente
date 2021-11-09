import React from 'react'
import {useState} from 'react';
import './estiloPreguntas.css'
import {tipos,alterIni} from './Datos.js';
import ResponderPregunta from './ResponderPregunta';
import CrearAlternativas from './CrearAlternativas';
export default function CrearPregunta() {
    const [pregunta,setPregunta] = useState('');
    const [archivo,setArchivo] = useState(false);
    const [tipo,setTipo] = useState(3);
    const [alternativas,setAlternativas] = useState(alterIni);
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
                    {tipos.map(e=>{
                        return <>
                        <input className="check" id={e.id} 
                        type="radio" name="tipos" onChange={changeTipo}
                         defaultChecked={e.id==tipo?true:false}/>
                        <label className="checklbl unselect"  htmlFor={e.id} >
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
                </div>
                
                
                <label className="itmform lblform">Previsualización:</label>
                <div className="ctnPrevius">
                    <ResponderPregunta 
                    pregunta={pregunta} 
                    archivo={archivo}
                    tipo={tipo}
                    alternativas = {alternativas}
                    />
                </div>
                <input type="submit" value="Crear"/>
            </form>
        </div>
    )
}
