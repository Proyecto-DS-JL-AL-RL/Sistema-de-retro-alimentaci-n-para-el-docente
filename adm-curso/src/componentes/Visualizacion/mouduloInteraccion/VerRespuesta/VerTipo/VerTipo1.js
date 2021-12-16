import React, { useState } from 'react'
import './VerTipo1.css';
function generarElemento(arr){
    if(arr.length == 0){
        return {id:0,cont:''};
    }
    let n = arr.length;
    let uid = arr[n-1].id;
    return {id:uid+1,cont:''}
};
function inciarVector(cant){
    let arr = []
    for(let i=0;i<cant;i++){
        let elem = generarElemento(arr);
        arr.push(elem);
    }
    return arr;
}
function unirContenido(arr){
    if(arr.length == 0) return '';
    let str = arr[0].cont;
    for(let i=1;i<arr.length;i++){
        str += arr[i].cont!= ''? "-" + arr[i].cont:'';
    }
    return str;
}
export default function VerTipo1(props) {
    const [alternativas,setAlternativas] = useState(inciarVector(3));
    const addAlternativa = (e) =>{
        if(alternativas.length<6){
            e.preventDefault();
            setAlternativas([...alternativas,generarElemento(alternativas)]);
        }
        
    }
    const popAlternativa = (event,id)=>{
        if(alternativas.length>1){
            event.preventDefault();
            let auAlt = alternativas.filter(e=> e.id!== id)
            
            setAlternativas(auAlt);
            props.handlePregunta(unirContenido(auAlt));
        }
        
    }
    const changeAlternativas = (event,id)=>{
        let auAlt = alternativas.map(e=> {
            if(e.id== id){
                e.cont = event.target.value;
            }
            return e;
        })
        setAlternativas(auAlt);
        props.handlePregunta(unirContenido(auAlt));
    }
    return (
        <div className="ctnAlt"> 
           <label>Opciones:</label>
            {
                alternativas.map(e=>{
                    return <div className='itmAltPreg'>
                    <input className="txtAlt completeText" type="text" value={e.cont} 
                    onChange={(event)=>changeAlternativas(event,e.id)} id={e.id}/>
                    <button className="btnAlt btnadd" onClick={addAlternativa} id={e.id}>+</button>
                    <button className="btnAlt btnpop" onClick={(event)=>popAlternativa(event,e.id)} id={e.id}>-</button>
                    </div>
                })
            }
        </div>
    )
}
