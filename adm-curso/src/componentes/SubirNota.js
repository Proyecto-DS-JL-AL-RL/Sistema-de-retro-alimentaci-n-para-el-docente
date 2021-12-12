import React from 'react';
import test from './clases/clases'
import {useParams} from "react-router-dom";
import './EditarCurso.css'
import BasicButtons from './componentesBasicos/CommonButton'
import {Link,BrowserRouter as Router,
    Route,Switch} from 'react-router-dom';
import { useState } from 'react';
import './subNota.css'
import axios from 'axios'
export default function SubirNota(props){
    const [disable, setDiseable] = useState(true)
    const [nom, setNom] = useState('Alexander Lique')
    const [codig, setcodig] = useState('20192196K')
    const [idcurso, setIdrecurso] = useState(props.idcurso)
    const [tipoPractica, setTipoPractica]= useState('')
    const [puntuacion, setPuntuacion] = useState('')
    const [estado, setEstado] = useState('')
    console.log(props.idCurso)
    return (
        <div>
            <h3>Subir Nota</h3>
                <div id="sEdit">
                        <p id="sdatos">Código del Alumno:</p>
                        <input id="seinput" value={'20192196K'}  disabled/>
                        <p id="sdatos">Alumno:</p>
                        <input id="seinput" value={'Alexander Lique'}  disabled/>
                        <p id="sdatos">ID Curso:</p>
                        <input id="seinput" value={idcurso} onChange={(e)=>{
                            setIdrecurso(e.target.value)
                        }} disabled/>
                        <p id="sdatos">Tipo prática:</p>
                        <input id="seinput" value={tipoPractica} onChange={(e)=>{
                            setTipoPractica(e.target.value)
                        }} disabled = {(disable)? "disabled" : ""}/>
                        <p id="sdatos">Puntuación</p>
                        <input id="seinput" value={puntuacion} onChange={(e)=>{
                            setPuntuacion(e.target.value)
                        }} disabled = {(disable)? "disabled" : ""}/>
                        <p id="sdatos">Estado</p>
                        <input id="seinput" value={estado} onChange={()=>{
                            setEstado("")
                        }} disabled = {(disable)? "disabled" : true}/>                    
                        <button className="sebton" onClick={()=>{
                            setDiseable(false)
                            setEstado("Sin Registro")
                        }}>Editar</button>
                        <button className="sebton" onClick={()=>{
                            setDiseable(true)
                            setPuntuacion('')
                            setEstado('Se ha registrado correctamente')
                            axios.post('/nota/create', {codigoAlumn:codig, codigCurso:idcurso,  TipoPractica:tipoPractica, Puntuacion:puntuacion})    
                        }
                            }>Guardar</button>
                </div>
        </div>
    )

}