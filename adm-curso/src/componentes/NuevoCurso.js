import React from 'react';
import test from './clases/clases'
import {useParams} from "react-router-dom";
import './EditarCurso.css'
import BasicButtons from './componentesBasicos/CommonButton'
import {Link,BrowserRouter as Router,
    Route,Switch} from 'react-router-dom';
import { useState } from 'react';

let course = test['cursos']

export default function NuevoCurso(props){
    const {idCurso} = useParams()
    const [disable, setDiseable] = useState(true)
    const [nombrecurso, setNombrecurso] = useState('')
    const [codigo, setCodigo]= useState('')
    const [fIncio, setfIncio] = useState('')
    const [fFinal, setfFinal] = useState('')
    const [idmentor, setIDmentor] = useState('')
    const [mentor, setMentor] = useState('')
    return (
        <div className="eText">
            <h1>Crear Curso</h1>
                <div id="Edit">
                        <p id="datos">Curso:</p>
                        <input id="einput" value={nombrecurso} onChange={(e)=>{
                            setNombrecurso(e.target.value)
                        }} disabled = {(disable)? "disabled" : ""}/>
                        <p id="datos">Código:</p>
                        <input id="einput" value={codigo} onChange={(e)=>{
                            setCodigo(e.target.value)
                        }} disabled = {(disable)? "disabled" : ""}/>
                        <p id="datos">ID Profesor:</p>
                        <input id="einput" value={idmentor} onChange={(e)=>{
                            setIDmentor(e.target.value)
                        }} disabled = {(disable)? "disabled" : ""}/>
                        <p id="datos">Mentor:</p>
                        <input id="einput" value={mentor} onChange={(e)=>{
                            setMentor(e.target.value)
                        }} disabled = {(disable)? "disabled" : ""}/>
                        <button className="ebton" onClick={()=>{setDiseable(false)}}>Editar</button>
                        <button className="ebton" onClick={()=>{
                            setDiseable(true)
                            }
                            }>Guardar</button>
                </div>
            <BasicButtons  variant={"contained"} onClick={()=>{
                            setNombrecurso('')
                            setCodigo('')
                            setfIncio('')
                            setfFinal('')
                            setIDmentor('')
                            setMentor('')         }} text={<Link id="link" to="/"> Volver Inicio </Link>}/>
        </div>
    )

}