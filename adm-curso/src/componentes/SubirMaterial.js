import React from 'react';
//import test from './clases/clases'
import {useParams} from "react-router-dom";
import './EditarCurso.css'
import { useState } from 'react';
import axios from 'axios'

export default function SubirMaterial(props){
    const [disable, setDiseable] = useState(true)
    const [titulo, setTitulo] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [file, setFile] = useState(null)
    const [idCurso,setIdCurso] = React.useState(useParams().id);
    return (
        <div className="containerGen">
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
                            <input type="file" id="einput" name="archivo" onChange={(e)=>{
                                //console.log((e.target.files[0]))
                                setFile(e.target.files[0])
                                const data = new FormData() ;
                                data.append('archivo', e.target.files[0]);
                                axios.post("/uploadFile", data).then(res => { // then print response status
                                    console.log(res.statusText)
                                })
                            }}/>
                            <button className="ebton" onClick={()=>{setDiseable(false)}}>Editar</button>
                            <button type="submit" className="ebton" onClick={()=>{
                                setDiseable(true)
                                //console.log(idCurso)
                                axios.post('/material/create', {titulo:titulo, description:descripcion, file:file.name, curso:idCurso })
                            }
                        }>Guardar</button>
                </div>
        </div>
        </div>
    )

}