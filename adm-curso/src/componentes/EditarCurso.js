import React from 'react';
import test from './clases/clases'
import {useParams} from "react-router-dom";
import './EditarCurso.css'
import BasicButtons from './componentesBasicos/CommonButton'
import {Link,BrowserRouter as Router,
    Route,Switch} from 'react-router-dom';
import { useState } from 'react';

let course = test['cursos']

export default function EditarCurso(props){
    const {idCurso} = useParams()
    const [disable, setDiseable] = useState(true)
    const [nombrecurso, setNombrecurso] = useState(course[idCurso-1].nombre_curso)
    const [codigo, setCodigo]= useState(course[idCurso-1].codigo)
    const [idprofesor, setIDprofesor] = useState(course[idCurso-1].id_profesor)
    const [nombreProfesor, setNombreProfesor] = useState(course[idCurso-1].profesor)
    const [descripcion, setDescripcion] = useState(course[idCurso-1].getDescripcion())
    return (
        <div className="eText">
            <h1>Editar Curso</h1>
                <div id="Edit">
                        <p id="datos">Curso:</p>
                        <input id="einput" value={nombrecurso} onChange={(e)=>{
                            setNombrecurso(e.target.value)
                            course[idCurso-1].setNombreCurso(e.target.value)
                        }} disabled = {(disable)? "disabled" : ""}/>
                        <p id="datos">Código:</p>
                        <input id="einput" value={codigo} onChange={(e)=>{
                            setCodigo(e.target.value)
                            course[idCurso-1].setCodigo(e.target.value)
                        }} disabled = {(disable)? "disabled" : ""}/>
                        <p id="datos">ID profesor</p>
                        <input id="einput" value={idprofesor} onChange={(e)=>{
                            setIDprofesor(e.target.value)
                            course[idCurso-1].setIDprofesor(e.target.value)
                        }} disabled = {(disable)? "disabled" : ""}/>
                        <p id="datos">Profesor</p>
                        <input id="einput" value={nombreProfesor} onChange={(e)=>{
                            setNombreProfesor(e.target.value)
                            course[idCurso-1].setNombreProfesor(e.target.value)
                        }} disabled = {(disable)? "disabled" : ""}/>
                        <p id="datos">Descripcion</p>
                        <textarea id="einput" value={descripcion} onChange={(e)=>{
                            setDescripcion(e.target.value)
                            course[idCurso-1].setDescripcion(e.target.value)
                        }} disabled = {(disable)? "disabled" : ""}/>
                        <button className="ebton" onClick={()=>{setDiseable(false)}}>Editar</button>
                        <button className="ebton" onClick={()=>{setDiseable(true)}}>Guardar</button>
                </div>
            <BasicButtons  variant={"contained"} text={<Link id="link" to="/"> Volver Inicio </Link>}/>
        </div>
    )

}