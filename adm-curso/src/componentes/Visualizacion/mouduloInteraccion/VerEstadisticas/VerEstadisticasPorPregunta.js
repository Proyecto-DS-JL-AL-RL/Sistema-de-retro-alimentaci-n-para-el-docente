import React,{useRef,useEffect} from 'react';
//import {num as vof} from './DatosRA.js';
import {dibujarBarra,dibujarRecta,text,graficarPunto} from './Draw.js';
export default function VerEstadisticasPorPregunta(props) {
    const contRef = useRef(null);
    const canvasRef= useRef(null);
    const datosPregunta = props.ansXQues;
    const draw = function(){
        //const datosPregunta = props.ansXQues;
        const canvas = canvasRef.current;
        const content = contRef.current;
        //console.log(props.ansXQues);
        canvas.width = content.clientWidth;
        canvas.height = content.clientHeight;
        const width = content.clientWidth;
        const height = content.clientHeight;
        const context = canvas.getContext("2d");
        const lenAns = datosPregunta.length;
        const vof = lenAns>5? datosPregunta.slice(lenAns-7,lenAns):datosPregunta;
        let n = vof.length;
        const sep = width/n; 

        //context.fillStyle = 'blue';
        //context.fillRect(0,0,canvas.width,canvas.height);
        //dibujarBarra(context,0,0,width,height,"yellow");
        //dibujarRecta(context,0,0,width,height);
        //dibujarRecta(context,0,100,width,100);
        //text(context,'hola',10,100,100,"orange","button");
        const margenTop =50;
        const separacion = 30;
        const sizeLetters = Math.min(20,separacion);
        const height_barra = height-(sizeLetters+10)-margenTop;
        const espacioInf = sizeLetters+15;
        const maxHeight = Math.max(...vof);
        
        graficarPunto(context,10,10);
        context.strokeStyle = 'red';
        context.lineWidth = 4;
        context.beginPath();
        for(let i=0;i<n;i++){
            if(i == 0){
                context.moveTo(sep*i+sep*0.5,height-(height_barra)/maxHeight*vof[i]-espacioInf);
            }
            else{
                context.lineTo(sep*i+sep*0.5,height-(height_barra)/maxHeight*vof[i]-espacioInf);
            }
        }
        context.stroke();
        for(let i=0;i<n;i++){
            //dibujarBarra(context,sep*i+20,height-(height_barra)/maxHeight*vof[i]-espacioInf,50,height_barra/maxHeight*vof[i],'#F2A');
            text(context,vof[i],sep*i+sep*0.35,height-(height_barra)/maxHeight*vof[i]-espacioInf-margenTop*0.7,sizeLetters*1.5,"white");
            text(context,i+1,sep*i+sep*0.3,height-espacioInf+1,sizeLetters*1.5,"white");
            graficarPunto(context,sep*i+sep*0.5,height-(height_barra)/maxHeight*vof[i]-espacioInf,"red",5);
        }
        //dibujarRecta(context,middleWidth,0,middleWidth,height);
        dibujarRecta(context,10,height-(espacioInf),width,height-(espacioInf))
        
        //context.strokeRect(0,0,width,height)
        
    }
    
    
    
    useEffect(()=>{
        draw();
        window.addEventListener("resize", draw);
        return ()=>{
            window.removeEventListener("resize",draw);
        }
    },[props])
    
    return (
        <div ref = {contRef}  style={{"width":"100%","height":"100%"}}>
            
            <canvas ref={canvasRef}/>
        </div>
    )
}
