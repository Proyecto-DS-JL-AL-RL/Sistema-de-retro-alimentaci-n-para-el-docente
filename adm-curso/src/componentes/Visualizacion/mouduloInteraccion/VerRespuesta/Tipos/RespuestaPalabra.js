import React,{useRef,useEffect,useState} from 'react';
import {palabras} from './DatosRespuesta.js';
import {dibujarBarra,dibujarRecta,text} from './Draw.js';
import {random} from 'canvas-sketch-util';
const colores = ['red','blue','green','orange','skyblue','blueviolet'];
const initRand = Math.floor(Math.random()*colores.length);
export default function RespuestaPalabra() {
    const contentRef = useRef(null);
    const canvasRef = useRef(null);
    const [size,setSize] = useState(0);
    function cambio(){
        setSize(window.innerWidth);
    }
    function draw() {
        //if(canvasRef === null || contentRef===null) return;
        const canvas = canvasRef.current;
        const content = contentRef.current;
        
        canvas.width = content.clientWidth;
        canvas.height = content.clientHeight;
        const width = content.clientWidth;
        const height = content.clientHeight;
        const context = canvas.getContext("2d");
        
        //context.fillStyle = 'blue';
        //context.fillRect(0,0,canvas.width,canvas.height);
        //dibujarBarra(context,0,0,width,height,"yellow");
        const cols = 4;
        const rows = 3;
        const numCells =  cols*rows;
        const gridw = width*0.9;
        const gridh = height*0.9;
        const cellw = gridw/cols;
        const cellh = gridh/rows;
        const margx = (width-gridw)*0.5;
        const margy = (height-gridh)*0.5;
        
        for(let i=0;i<numCells;i++){
            const col = i%cols;
            const row = Math.floor(i/cols);
            const x = col*cellw;
            const y = row*cellh;
            const w = cellw * 0.8;
            const h = cellh*0.8;
            const nx = random.noise2D(x,y,0.01);
            const angle = nx*Math.PI*0.2;
            const size = cellw/(palabras[i%palabras.length].length);

            context.save();
            context.strokeStyle = 'black';
            context.translate(x,y);
            context.translate(margx,margy);
            context.translate(cellw*0.5,cellh*0.5);
            context.rotate(angle);

            text(context,palabras[i%palabras.length],w*-0.5,0,size*1.8,colores[(initRand+i)%colores.length],"middle");
            context.beginPath();
            context.moveTo(w*-0.55,size*0.9);
            context.lineTo(w*0.55,size*0.9);
            context.stroke();

            context.restore();

        }
        context.strokeStyle = 'black';
        context.strokeRect(0,0,width,height);
    }
    useEffect(()=>{
        draw();
        window.addEventListener("resize", draw);
        return ()=>{
            window.removeEventListener("resize",draw);
        }
    },[])
    return (
        
        <div ref = {contentRef}  style={{"width":"100%","height":"100%",}}>
            <canvas ref={canvasRef}/>
        </div>
        
    )
}
/**
 * dibujarRecta(context,0,0,width,height);
        dibujarRecta(context,0,100,width,10);
        text(context,'hola',10,100,100,"orange","button");
        let n = vof.length;
        let middleWidth = width/2;
        let separacion = 30;
        let sizeLetters = Math.min(20,separacion);
        let height_barra = height-(sizeLetters+10);
        let espacioInf = sizeLetters+10;
        
        let maxHeight = Math.max(...vof); 
        for(let i=0;i<n;i++){
            dibujarBarra(context,100*i,height-(height_barra)/maxHeight*vof[i]-espacioInf,50,height_barra/maxHeight*vof[i]);
        }
        dibujarRecta(context,middleWidth,0,middleWidth,height);
        dibujarRecta(context,0,height-(sizeLetters+10),width,height-(sizeLetters+10))
        
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
        const cols = 4;
        const rows = 3;
        const numCells =  cols*rows;
        const gridw = width*0.9;
        const gridh = height*0.9;
        const cellw = gridw/cols;
        const cellh = gridh/rows;
        const margx = (width-gridw)*0.5;
        const margy = (height-gridh)*0.5;
        
        for(let i=0;i<numCells;i++){
            const col = i%cols;
            const row = Math.floor(i/cols);
            const x = col*cellw;
            const y = row*cellh;
            const w = cellw * 0.8;
            const h = cellh*0.8;
            const nx = random.noise2D(x,y,0.01);
            const angle = nx*Math.PI*0.2;
            const size = cellw/(palabras[i%palabras.length].length);

            context.save();
            context.strokeStyle = 'black';
            context.translate(x,y);
            context.translate(margx,margy);
            context.translate(cellw*0.5,cellh*0.5);
            context.rotate(angle);

            text(context,palabras[i%palabras.length],w*-0.5,0,size*1.8,"red","middle");
            context.beginPath();
            context.moveTo(w*-0.55,size*0.9);
            context.lineTo(w*0.55,size*0.9);
            context.stroke();

            context.restore();

        }
        context.strokeStyle = 'black';
        context.strokeRect(0,0,width,height);
        
    }
 
        */