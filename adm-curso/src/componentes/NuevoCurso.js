import React from 'react';
//import test from './clases/clases'
import './EditarCurso.css'
import BasicButtons from './componentesBasicos/CommonButton'
import {Link} from 'react-router-dom';
import { useState } from 'react';
import axios from 'axios'
import hmacSHA256 from "crypto-js/hmac-sha256";
import Base64 from "crypto-js/enc-base64";

const header = {
    alg: "HS256",
    typ: "JWT"
  };
  
  
  
  const encodingReplacements = {
    "+": "-",
    "/": "_",
    "=": ""
  };
  
  const makeUrlSafe = encoded => {
    return encoded.replace(/[+/=]/g, match => encodingReplacements[match]);
  };
  
  const encode = obj => {
    const encoded = btoa(JSON.stringify(obj));
    return makeUrlSafe(encoded);
  };
  
  const makeSignature = (header, payload, secret) => {
    const hashed = hmacSHA256(
      `${encode(header)}.${encode(payload)}`, secret
    );
    const stringified=Base64.stringify(hashed);
    return makeUrlSafe(stringified);
  };
  
  const getJwt = (header, payload, signature) => {
    return `${header}.${payload}.${signature}`
  };
  
  

export default function NuevoCurso(props){
    const [disable, setDiseable] = useState(true)
    const [nombrecurso, setNombrecurso] = useState('')
    const [codigo, setCodigo]= useState('')
    const [idmentor, setIDmentor] = useState(props.idprofesor)
    const [descripcion, setDescripcion] = useState('')
    const [token, setToken] = useState('')

    return (
      <div className="containerGen">
        <div className="eText">
            <h1>Crear Curso</h1>
                <div id="Edit">
                        <p id="datos">Nombre Curso:</p>
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
                        <p id="datos">clave del curso</p>
                        <input id="einput" value={token}/>
                        <p id="datos">Descripcion:</p>
                        <textarea id="einput" value={descripcion} onChange={(e)=>{
                            setDescripcion(e.target.value)
                        }} disabled = {(disable)? "disabled" : ""}/>
                        <button className="ebton" onClick={()=>{setDiseable(false)}}>Editar</button>
                        <button className="ebton" onClick={()=>{
                            setDiseable(true)
                            const payload = {
                                sub: nombrecurso,
                                name: codigo,
                                iat: idmentor   
                              };
                              const jwtSecret = idmentor;
                            setToken(getJwt(
                                encode(header),
                                encode(payload),
                                makeSignature(header,payload,jwtSecret )))
                            axios.post('/curso/create', 
                            {
                                nombre: nombrecurso, 
                                codigo: codigo,
                                IDProfe:idmentor,
                                descripcion:descripcion,
                                alumnos:[]
                            })
                            axios.post('/registroCurso/register', {codigoCurso:codigo, token:getJwt(
                                encode(header),
                                encode(payload),
                                makeSignature(header,payload,jwtSecret ))})
                            }}>Guardar</button>
                </div>
            <BasicButtons  variant={"contained"} onClick={()=>{
                            setNombrecurso('')
                            setCodigo('')
                            setIDmentor('')
                            setDescripcion('')         }} text={<Link id="link" to="/"> Volver Inicio </Link>}/>
        </div>
        </div>  
    )

}