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
                        <input id="einput" value={course[idCurso-1].id_profesor} disabled = {(disable)? "disabled" : ""}/>
                        <p id="datos">Profesor</p>
                        <input id="einput" value={course[idCurso-1].profesor} disabled = {(disable)? "disabled" : ""}/>
                        <p id="datos">Fecha de Inicio</p>
                        <input id="einput" value={course[idCurso-1].fecha_Inicio.getDate()+"/"+course[idCurso-1].fecha_Inicio.getMonth()+"/"+course[idCurso-1].fecha_Inicio.getFullYear()} disabled = {(disable)? "disabled" : ""}/>
                        <p id="datos">Fecha de Finalización</p>
                        <input id="einput" value={course[idCurso-1].fecha_Final.getDate()+"/"+course[idCurso-1].fecha_Final.getMonth()+"/"+course[idCurso-1].fecha_Final.getFullYear()} disabled = {(disable)? "disabled" : ""}x/>
                        <p id="datos">Descripcion</p>
                        <textarea id="einput" value={course[idCurso-1].getDescripcion()} disabled = {(disable)? "disabled" : ""}/>
                        <button className="ebton" onClick={()=>{setDiseable(false)}}>Editar</button>
                        <button className="ebton" onClick={()=>{setDiseable(true)}}>Guardar</button>
                </div>
            <BasicButtons  variant={"contained"} text={<Link id="link" to="/"> Volver Inicio </Link>}/>
        </div>
    )

}