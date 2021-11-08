import React, { useRef, useEffect , useState} from 'react'
import {respuestaAlternativas,tamAlt} from './Tipos/DatosRespuesta.js';
export default function BarrasVerticales (props) {
  const canvasRef = useRef(null)
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);
  const dibujarLinea = (ctx,x0,y0,x1,y1)=>{
    ctx.beginPath();
    ctx.moveTo(x0,y0);
    ctx.lineTo(x1,y1);
    ctx.stroke();
  }
  const respuesta  =(ctx,text,x0,y0,size,tipo="top") =>{
    ctx.textBaseline = tipo;
    ctx.font = size+'px serif';
    ctx.fillStyle = 'green';
    ctx.fillText(text,x0+5,y0);
    
  }
  
  const draw = (ctx, frameCount) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
    ctx.fillStyle = '#000000'
    ctx.beginPath()
    ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
    ctx.arc(100,500,20,0,2*Math.PI);
    ctx.fill()
  }
  useEffect(() =>{
    const updateWidth = () => {
        const content = document.getElementById("contRespuesta");
        setWidth(content.clientWidth);
        setHeight(content.clientHeight);
        console.log(width,height);
      }
      updateWidth()
      window.addEventListener("resize", updateWidth)
      return () => {
        window.removeEventListener("resize", updateWidth)
      }
    },[])
    useEffect(() => {
        
        
      const canvas = canvasRef.current
      
      const context = canvas.getContext('2d')
      let frameCount = 0
      let animationFrameId
      
      //Our draw came here
      const render = () => {
        frameCount++
        draw(context, frameCount)
        context.fillRect(0,0,200,200);
        animationFrameId = window.requestAnimationFrame(render)
      }
      render()
      return () => {
        window.cancelAnimationFrame(animationFrameId)
      }
    }, [draw])
  
  return <canvas ref={canvasRef}  width={width} height={height}/>
}


/**
 * 
      let marg = (height)/n;
      for(let i =0;i<n;i++){
        context.fillStyle = 'orange';
        context.fillRect(marg/2,5+ i*marg,(width)*tamAlt[i]/sum -marg/2, marg-10);
        respuesta(context,respuestaAlternativas[i],marg/2,5+i*marg,marg-10);
        respuesta(context,tamAlt[i],0,5+i*marg+marg/2,marg/2,"middle")
        
      }
      
      dibujarLinea(context,marg/2,0,marg/2,height);
import React, { useRef, useEffect , useState} from 'react'
import {vof} from './DatosRespuesta.js';
const BarrasHorizontales = props => {
  const canvasRef = useRef(null)
  const [height,setHeight] = useState(100);
  const [width, setWidth] = useState(100);
  
  const dibujarLinea = (ctx,x0,y0,x1,y1)=>{
    ctx.beginPath();
    ctx.moveTo(x0,y0);
    ctx.lineTo(x1,y1);
    ctx.stroke();
  }
  const respuesta  =(ctx,text,x0,y0,size,tipo="top") =>{
    ctx.textBaseline = tipo;
    ctx.font = size+'px serif';
    ctx.fillStyle = 'green';
    ctx.fillText(text,x0+5,y0);
    
  }
  
  const dibujarRect = (ctx,x0,y0,x1,y1)=>{

  }
  const draw = (ctx) => {
    ctx.font = '50px serif';
    ctx.rotate(Math.PI/2);
    ctx.fillText('Hola',20,20);
    ctx.restore();
  }
  
  
  useEffect(() => {
    let cont = document.getElementById('contRespuesta');
    

    setHeight(cont.clientHeight);
    setWidth(cont.clientWidth);
    
    
    
    console.log(width,height);
    const canvas = canvasRef.current
    const context = canvas.getContext('2d')
    canvas.addEventListener('resize',function(){
        console.log("hola");
    })
    console.log(cont);
    
    let n = vof.length;
    let topMax =  Math.max(...vof);
    
    
    //Our draw came here
    const marg = 30;
    const render = () => {
      //dibujarLinea(context,0,height-10,width,height-10);
      for(let i =0 ;i<n;i++){
        context.fillStyle='blue';
        context.fillRect(i*110,height-(height-marg)*vof[i]/topMax,80,(height-marg)*vof[i]/topMax-marg);
        respuesta(context,"XD",i*110+10,height-marg,marg);
        dibujarLinea(context,0,height-marg,width,height-marg);
    }  
    
      
    }
    render();
    
    
  }, [])
  
  return (<canvas ref={canvasRef} {...props} height={height} width={width}/>)
}

export default BarrasHorizontales 
 
 
      */