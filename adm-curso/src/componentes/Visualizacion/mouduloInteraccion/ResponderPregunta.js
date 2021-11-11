import React from 'react'
import './Respuesta.css';
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
export default function ResponderPregunta(props) {
    return (
        <div>
            
            <div>{mensaje(props.tipo)}</div>
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
        </div>
    )
}
/**
 * 
 * 
 * Para el alumno
 let n = arr.length;
    let auarr = [Math.floor(Math.random()*n)];
    while(auarr.length <n){
        let ale = Math.floor(Math.random()*n);
        let band = false;
        for(let i=0;i<auarr.length;i++){
            if(auarr[i]==ale) band=true;
        }
        if(band ==false){
            auarr.push(ale);
        }
    }
 */