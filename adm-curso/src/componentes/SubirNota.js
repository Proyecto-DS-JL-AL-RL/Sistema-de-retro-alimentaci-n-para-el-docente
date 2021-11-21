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
    const {idCurso, id, id2} = useParams()
    const [disable, setDiseable] = useState(true)
    const [idcurso, setIdrecurso] = useState('')
    const [tipoPractica, setTipoPractica]= useState('')
    const [puntuacion, setPuntuacion] = useState('')

    return (
        <div className="eText">
            <h1>Subir Nota</h1>
                <div id="Edit">
                        <p id="datos">Código Alumno:</p>
                        <input id="einput" value={alumnos[id2-1].id}  disabled = {(disable)? "disabled" : ""}/>
                        <p id="datos">ID Curso:</p>
                        <input id="einput" value={course[id-1].codigo} onChange={(e)=>{
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
                        <button className="ebton" onClick={()=>{setDiseable(false)}}>Editar</button>
                        <button className="ebton" onClick={()=>{
                            setDiseable(true)
                            }
                            }>Guardar</button>
                </div>
            <BasicButtons  variant={"contained"} onClick={()=>{
                            setIdrecurso('')
                            setTipoPractica('')
                            setPuntuacion('')
                            }} text={<Link id="link" to="/VerNotas/"> Volver Inicio </Link>}/>
        </div>
    )

}