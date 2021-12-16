import * as React from 'react';
import './notasAlumnos.css'
import {useParams} from 'react-router-dom'
import { useState } from 'react';
//import test from './clases/clases'
import SubirNota from './SubirNota'
import './notasAlumnos.css'
import BasicTable from './componentesBasicos/TablaNotas.js'
//let  alumno = test['alumno']
/*
function range(start, stop) {
  if (stop === undefined) {
    stop = start;
    start = 0;
  }
  
  if (start > stop) 
    return [];

  return new Array(stop - start).fill(start).map((el, i) => el + i);
}*/

//const cards = Array.from(range(1, alumno.length+1))

//<Header NameCurso={props.Inicio} componenteMenu={<SelectedListItem Back={<Principal/>}/>} componentes={<SelectedListIncio  perfil={<VerPerfil/>}/>}/>

export default function VerNotaAlumnos(props) {
    let { id } = useParams();
//  const [esProfesor, setEsProfesor]=useState(profesor.getCondicion());
//    const [subirNota, setSubirNota] = useState(false)
//    const [idCurso, setIdCurso] = useState('')
//    const [idAlumno, setIdAlumno] = useState('')
  return (
  
    <div>
      <div>
          {subirNota?<SubirNota/>:<BasicTable curso={id} codigoAlumn={props.user}/>}
          </div>
    </div>
  );
}