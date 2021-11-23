import React from 'react';
import test from './clases/clases'
import {useParams} from "react-router-dom";
import './EditarCurso.css'
import BasicButtons from './componentesBasicos/CommonButton'
import {Link,BrowserRouter as Router,
    Route,Switch} from 'react-router-dom';
import { useState } from 'react';

let course = test['cursos']
let alumnos = test['alumno']
export default function SubirNota(props){
    const [disable, setDiseable] = useState(true)
    const [idcurso, setIdrecurso] = useState('')
    const [tipoPractica, setTipoPractica]= useState('')
    const [puntuacion, setPuntuacion] = useState('')
    const [estado, setEstado] = useState('')
    return (
        <div className="eText">
            <h1>Subir Nota</h1>
                <div id="Edit">
                        <p id="datos">Código del Alumno:</p>
                        <input id="einput" value={alumnos[props.id2-1].id}  disabled = {(disable)? "disabled" : ""}/>
                        <p id="datos">Alumno:</p>
                        <input id="einput" value={alumnos[props.id2-1].getNombre()+" "+alumnos[props.id2-1].getApellido()}  disabled = {(disable)? "disabled" : ""}/>
                        <p id="datos">ID Curso:</p>
                        <input id="einput" value={course[props.id-1].codigo} onChange={(e)=>{
                            setIdrecurso(e.target.value)
                        }} disabled = {(disable)? "disabled" : ""}/>
                        <p id="datos">Tipo prática:</p>
                        <input id="einput" value={tipoPractica} onChange={(e)=>{
                            setTipoPractica(e.target.value)
                        }} disabled = {(disable)? "disabled" : ""}/>
                        <p id="datos">Puntuación</p>
                        <input id="einput" value={puntuacion} onChange={(e)=>{
                            setPuntuacion(e.target.value)
                        }} disabled = {(disable)? "disabled" : ""}/>
                        <p id="datos">Estado</p>
                        <input id="einput" value={estado} onChange={()=>{
                            setEstado("")
                        }} disabled = {(disable)? "disabled" : ""}/>                    
                        <button className="ebton" onClick={()=>{
                            setDiseable(false)
                            setEstado("Sin Registro")
                        }}>Editar</button>
                        <button className="ebton" onClick={()=>{
                            setDiseable(true)
                            setPuntuacion('')
                            setEstado('Se ha registrado correctamente')
                            }
                            }>Guardar</button>
                </div>
        </div>
    )

}