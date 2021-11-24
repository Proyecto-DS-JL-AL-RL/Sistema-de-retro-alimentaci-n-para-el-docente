import React from 'react';
import test from './clases/clases'
import {useParams} from "react-router-dom";
import './EditarCurso.css'
import BasicButtons from './componentesBasicos/CommonButton'
import {Link,BrowserRouter as Router,
    Route,Switch} from 'react-router-dom';
import { useState } from 'react';


export default function SubirMaterial(props){
    const [disable, setDiseable] = useState(true)
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    return (
        <div className="eText">
            <h1>Subir Material</h1>
                <div id="Edit">
                        <p id="datos">Titulo:</p>
                        <input id="einput" value={titulo} onChange={(e)=>{
                            setTitulo(e.target.value)
                        }} disabled = {(disable)? "disabled" : ""}/>
                        <p id="datos">descripcion:</p>
                        <textarea id="einput" value={descripcion} onChange={(e)=>{
                            setDescripcion(e.target.value)
                        }} disabled = {(disable)? "disabled" : ""}/>
                        <p id="datos">Subir Material</p>
                        <input type="file" id="einput"/>
                        <button className="ebton" onClick={()=>{setDiseable(false)}}>Editar</button>
                        <button className="ebton" onClick={()=>{
                            setDiseable(true)
                        }
                    }>Guardar</button>
                </div>
        </div>
    )

}