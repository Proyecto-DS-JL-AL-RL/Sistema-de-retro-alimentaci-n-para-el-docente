import React from 'react';
import './ConfSesion.css';
const curses = ['Curso1','Curso2','Curso3'];

export default function ConfSesion(props) {
    
    return (
        <div>
            <fieldset className="ctnClassConf">
                <legend>Curso</legend>
                <select name = "cursos"  >
                    {curses.map((e,i)=>{
                        return <option  key ={i} value={e}>
                            {e}
                        </option>
                    })}
                </select>
                <button>Cambiar Clase</button>
            </fieldset>
            <fieldset className="ctnSesionConf">
                <legend>Sesion</legend>
                <div>
                    <input text="text" value={props.sesion.title} 
                    onChange = {e =>props.handleTitle(e)}/>
                    <div>Inicio: </div>
                    <div>Fin: </div>
                </div>
                
                <div className="ctnActionConf">
                    <button >Crear Sesion</button>
                    <button >Terminar Sesion</button>
                    <button >GuardarCambios</button>
                </div>
                
            </fieldset>
            
        </div>
    )
}
