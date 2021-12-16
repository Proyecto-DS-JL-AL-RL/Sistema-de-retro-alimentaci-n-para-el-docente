import React,{useState,useEffect} from 'react'
import './estiloCrearAlt.css';
import {alterIni} from './Datos.js';
function generarElemento(arr){
    let n = arr.length;
    let uid = arr[n-1].id;
    return {id:uid+1,cont:''}
};

export default function CrearAlternativas(props) {
    const [alternativas,setAlternativas] = useState( props.alternativas||alterIni);
    useEffect(() => {
        props.changeAlt(alternativas);
    }, [alternativas])
    const addAlternativa = (e) =>{
        e.preventDefault();
        setAlternativas([...alternativas,generarElemento(alternativas)]);
    }
    const popAlternativa = (event,id)=>{
        event.preventDefault();
        let auAlt = alternativas.filter(e=> e.id!== id)
        setAlternativas(auAlt);
    }
    const changeAlternativas = (event,id)=>{
        let auAlt = alternativas.map(e=> {
            if(e.id== id){
                e.cont = event.target.value;
            }
            return e;
        })
        setAlternativas(auAlt);
    }
    
    return (
        
        <div>
            <label>Opciones:</label>
            {
                alternativas.map((e,i)=>{
                    return <div className='itmAlt' key = {"AlternativaPropuestas"+i+e}>
                    <button className={"btnAlt "+ (parseInt(props.correct)===i?"btnac":"btndes")}
                    onClick={(e)=>{e.preventDefault(); props.changeCorrect(i)}}>
                    
                    {String.fromCharCode(2705)}
                    </button>
                    <input className="txtAlt " type="text" value={e.cont} 
                    onChange={(event)=>changeAlternativas(event,e.id)} id={e.id}/>
                    <button className="btnAlt btnadd" onClick={addAlternativa} id={e.id}>+</button>
                    <button className="btnAlt btnpop" onClick={(event)=>popAlternativa(event,e.id)} id={e.id}>-</button>
                    </div>
                })
            }
        </div>
    )
}
