import React,{useRef,useEffect} from 'react';
import {respuestaAlternativas,tamAlt} from './Tipos/DatosRespuesta.js';
import {dibujarBarra,dibujarRecta,text} from './Tipos/Draw.js';
export default function Canvas() {
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
        dibujarRecta(context,0,0,width,height);
        dibujarRecta(context,0,100,width,100);
        text(context,'hola',10,100,100,"orange","button");
        let n = tamAlt.length;
        let height_t = height-20;
        let height_barras = height_t/n;
        let separacion = Math.max(10,height_barras/n);
        let inicio = Math.max(10,height_barras/2);
        let max_width = Math.max(...tamAlt);
        for(let i=0;i<n;i++){
          dibujarBarra(context,inicio,i*height_barras+10,(width-inicio)/max_width*tamAlt[i],height_barras-separacion);
          text(context,tamAlt[i],0,i*height_barras+10+height_barras/2-separacion/2,(height_barras)/2,"skyblue","middle");
          dibujarRecta(context,0,i*height_barras+10+height_barras/2-separacion/2,width,i*height_barras+10+height_barras/2-separacion/2);
          text(context,respuestaAlternativas[i],inicio,i*height_barras+10+height_barras/2-separacion/2,(height_barras)/2,"orange","middle");
        }
        dibujarRecta(context,inicio,0,inicio,height);
        
    }
    window.onresize = function(){
        draw();
    }
    useEffect(()=>{
        draw();
    },[])
    
    return (
        <div ref = {contRef}  style={{"width":"100%","height":"100%",}}>
            <canvas ref={canvasRef}/>
        </div>
    )
}
