import {React,useRef,useEffect,useState} from 'react'
import {respuestaAlternativas,tamAlt} from './Tipos/DatosRespuesta.js';
export default function Canvas(props) {
    const canvasRef = useRef(null);
    const [width, setWidth] = useState();
    const [height, setHeight] = useState();
    const draw = (ctx, frameCount) => {
        ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fillStyle = '#000000'
        ctx.beginPath()
        ctx.arc(50, 100, 20*Math.sin(frameCount*0.05)**2, 0, 2*Math.PI)
        ctx.arc(100,500,20,0,2*Math.PI);
        ctx.fill()
      }
    function hola(){
        const content = document.getElementById("contRespuesta");
        console.log(content.clientWidth,content.clientHeight);
        return [content.clientWidth,content.clientHeight]
    }
    const updateWidth = () => {
        const content = document.getElementById("contRespuesta");
        setWidth(content.clientWidth);
        setHeight(content.clientHeight);
    
    }
      useEffect(() =>{
        
          updateWidth()
          window.addEventListener("resize", updateWidth)
          
        },[]);
    useEffect(()=>{
    return () => {
        window.removeEventListener("resize", updateWidth)
        }
    },[height,width]);

      useEffect(() => {
        
        
        const canvas = canvasRef.current
        
        const context = canvas.getContext('2d')
        let frameCount = 0
        let animationFrameId
        
        //Our draw came here
        const render = () => {
          frameCount++
          draw(context, frameCount)
          context.fillRect(200,200,20,20);
          animationFrameId = window.requestAnimationFrame(render)
        }
        render()
        return () => {
          window.cancelAnimationFrame(animationFrameId)
        }
      }, [draw])
    
    return (
        <canvas className="hola" ref = {canvasRef} width={width} height={height}/>
    )
}
