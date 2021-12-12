import React from 'react';
//import test from './clases/clases'
import './EditarCurso.css'
import BasicButtons from './componentesBasicos/CommonButton'
import {Link} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
//let course = test['cursos']
/*
axios.post('/curso/'+body[0].codigoCurso+'/update', [{codigo:body[0].codigoCurso},
                                        {
                                            alumnos:curso[0].alumnos.push(props.iduser)
                                        }])
*/
export default function RegistroCurso(props){
    const [disable, setDiseable] = useState(false)
    const [tokCurso, setTokCurso] = useState('')
    return (
        <div className="eText">
            <h1>Registrar Curso</h1>
                <div id="Edit">
                        <p id="datos">Llenar código del Curso:</p>
                        <input id="einput" onChange={(e)=>{
                            setTokCurso(e.target.value);
                    }} disabled = {(disable)? "disabled" : ""}/>
                        <button className="ebton" onClick={()=>{
                            setDiseable(!disable);
                            axios.post('/registroCurso/buscar', {token:tokCurso}).then((response) => {
                                let body = response.data;
                                axios.post('/curso/search', {codigo: body[0].codigoCurso}).then((response) => {
                                    let curso = response.data;
                                    //let list = curso[0].alumnos.push(props.iduser)
                                    axios.post('/curso/'+curso[0].codigo+'/update', [{codigo:curso[0].codigo},
                                        {$push:{alumnos:props.iduser}
                                        }])
                                }, (error) => {
                                    console.log(error);
                                })
                            }, (error) => {
                                console.log(error);
                            })
                        
                    }}>Registrarse</button>
                </div>
            <BasicButtons  variant={"contained"} text={<Link id="link" to="/"> Volver Inicio </Link>}/>
        </div>
    )

}