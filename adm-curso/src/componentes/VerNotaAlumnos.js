import * as React from 'react';
import Header from './Header';
import SelectedListIncio from './componentesBasicos/MenuInicio.js';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './notasAlumnos.css'
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Principal from '../paginas/Principal'
import { useState } from 'react';
import test from './clases/clases'
import SubirNota from './SubirNota'
import './notasAlumnos.css'

let  alumno = test['alumno']
function range(start, stop) {
  if (stop === undefined) {
    stop = start;
    start = 0;
  }
  
  if (start > stop) 
    return [];

  return new Array(stop - start).fill(start).map((el, i) => el + i);
}

const cards = Array.from(range(1, alumno.length+1))

//<Header NameCurso={props.Inicio} componenteMenu={<SelectedListItem Back={<Principal/>}/>} componentes={<SelectedListIncio  perfil={<VerPerfil/>}/>}/>

export default function VerNotaAlumnos(props) {
//  const [esProfesor, setEsProfesor]=useState(profesor.getCondicion());
    const [subirNota, setSubirNota] = useState(false)
    const [idCurso, setIdCurso] = useState('')
    const [idAlumno, setIdAlumno] = useState('')
  return (
  
    <div>
      <div>
          {subirNota?<SubirNota/>:null}
          </div>
    </div>
  );
}