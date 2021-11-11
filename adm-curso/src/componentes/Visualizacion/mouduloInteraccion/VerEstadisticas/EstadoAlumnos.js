import React,{useRef,useEffect} from 'react';

import {dibujarBarra,dibujarRecta,text} from './Draw.js';

const colores = ['red','blue','green','orange','skyblue','blueviolet'];
const initRand = Math.floor(Math.random()*colores.length);
const respuestaAlternativas = [
    'Ausentes','NecesitaAyuda', 'Activo', 'Pasivo', 'Distraido'
]
const tamAlt = [2,3,9,5,9];
export default function RespuestaAlternativas() {
    const contRef = useRef(null);
    const canvasRef= useRef(null);
    
    const draw = function(){
        const canvas = canvasRef.current;
        const content = contRef.current;
        canvas.width = content.clientWidth;
        canvas.height = content.clientHeight;
        const width = content.clientWidth;
        const height = content.clientHeight;
        const context = canvas.getContext("2d");
        
        //context.fillStyle = 'blue';
        //context.fillRect(0,0,canvas.width,canvas.height);
        //dibujarBarra(context,0,0,width,height,"yellow");
        //dibujarRecta(context,0,0,width,height);
        //dibujarRecta(context,0,100,width,100);
        
        let n = tamAlt.length;
        let height_t = height-20;
        let height_barras = height_t/n;
        let separacion = Math.max(10,height_barras/n);
        let inicio = Math.max(10,height_barras/2);
        let max_width = Math.max(...tamAlt);
        for(let i=0;i<n;i++){
          dibujarBarra(context,inicio,i*height_barras+10,(width-inicio)/max_width*tamAlt[i],height_barras-separacion,colores[(initRand+i)%colores.length]);
          text(context,tamAlt[i],0,i*height_barras+10+height_barras/2-separacion/2,(height_barras)/2,"skyblue","middle");
          //dibujarRecta(context,0,i*height_barras+10+height_barras/2-separacion/2,width,i*height_barras+10+height_barras/2-separacion/2);
          text(context,respuestaAlternativas[i],inicio,i*height_barras+10+height_barras/2-separacion/2,(height_barras)/2,"white","middle");
        }
        dibujarRecta(context,inicio,0,inicio,height);
        //text(context,'hola',width/2,height/2,100,"orange","button");
        //context.strokeRect(0,0,width,height);
        
    }
    useEffect(()=>{
        draw();
        window.addEventListener("resize", draw);
        return ()=>{
            window.removeEventListener("resize",draw);
        }
    },[])
    
    return (
        <div ref = {contRef}  style={{"width":"100%","height":"100%",}}>
            <canvas ref={canvasRef}/>
          
        </div>
    )
}