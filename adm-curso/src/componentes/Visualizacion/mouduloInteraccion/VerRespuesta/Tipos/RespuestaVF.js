import React,{useRef,useEffect, useState} from 'react';
import {vof} from './DatosRespuesta.js';
import {dibujarBarra,dibujarRecta,text} from './Draw.js';
function transform(rpts){
    let arr = [0,0];
    rpts.map((e)=>{
        arr[parseInt(e.content)]++;
    })
    return arr;
}
export default function RespuestaVF(props) {
    const contRef = useRef(null);
    const canvasRef= useRef(null);
    /*const [vof,setVof] = useState(()=>{
        let arr = [0,0];
        props.question.answers.map((e)=>{
            arr[parseInt(e.content)]++;
        })
        
        return arr
    });*/
    const draw = function(){
        const vof = transform(props.answers);
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
        //text(context,'hola',10,100,100,"orange","button");
        let n = vof.length;
        let middleWidth = width/2;
        let separacion = 30;
        let sizeLetters = Math.min(20,separacion);
        let height_barra = height-(sizeLetters+10);
        let espacioInf = sizeLetters+15;
        let vf = ['V','F'];
        let maxHeight = Math.max(...vof); 
        for(let i=0;i<n;i++){
            dibujarBarra(context,middleWidth + 100*(i%2===0?1:-1)*i + separacion,height-(height_barra)/maxHeight*vof[i]-espacioInf,50,height_barra/maxHeight*vof[i],'#F2A');
            text(context,vof[i%2]==0?'':vof[i%2],middleWidth + 100*(i%2===0?1:-1)*i + separacion+10,10+height-(height_barra)/maxHeight*vof[i]-espacioInf,sizeLetters*2,"white");
            text(context,vf[i%2],middleWidth + 100*(i%2===0?1:-1)*i + separacion+5,height-espacioInf,sizeLetters*2-1,"white");
        }
        //dibujarRecta(context,middleWidth,0,middleWidth,height);
        dibujarRecta(context,0,height-(espacioInf),width,height-(espacioInf))
        //context.strokeRect(0,0,width,height)
        
    }
    
    
    
    useEffect(()=>{
        draw();
        window.addEventListener("resize", draw);
        return ()=>{
            window.removeEventListener("resize",draw);
        }
    },[])
    useEffect(()=>{
        draw();
    })
    return (
        <div ref = {contRef}  style={{"width":"100%","height":"100%"}}>
            <canvas ref={canvasRef}/>
        </div>
    )
}
