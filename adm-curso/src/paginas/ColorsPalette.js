import React from 'react'
import './ColorsPalette.css';
const colores = ['skyblue','gray','green','pink','cyan','yellow'];
export default function ColorsPalette() {
    const changeColor = (color)=>{
        const style = document.documentElement.style;
        style.setProperty('--colorBack',color);
    }
    return (
        <div className="ctnColorsCont">
            {colores.map((e,i)=>{
                return <button className="btnColor" 
                onClick={()=>{changeColor(e)}}
                key={"colore"+e+i}
                style={{backgroundColor:e}}></button>
            })}
            
        </div>
    )
}
/**
 * <button className="btnColor" onClick={()=>{changeColor('gray')}}>G</button>
            <button className="btnColor" onClick={()=>{changeColor('green')}}>G</button>
            <button className="btnColor" onClick={()=>{changeColor('pink')}}>G</button>
 */