import * as React from 'react';
import Header from './Header';
import SelectedListIncio from './componentesBasicos/MenuInicio.js';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import CameraIcon from '@mui/icons-material/PhotoCamera';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import './Inicio.css'
import VerCurso from '../componentes/Curso';
import VerPerfil from '../componentes/Perfil';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import {Link} from 'react-router-dom';
import Principal from '../paginas/Principal'
import SelectedListItem  from './componentesBasicos/MenuCurso';

import test from './clases/clases'

let curso = test['cursos']

function range(start, stop) {
  if (stop === undefined) {
    stop = start;
    start = 0;
  }
  
  if (start > stop) 
    return [];

  return new Array(stop - start).fill(start).map((el, i) => el + i);
}

const cards = Array.from(range(1, curso.length+1))

//<Header NameCurso={props.Inicio} componenteMenu={<SelectedListItem Back={<Principal/>}/>} componentes={<SelectedListIncio  perfil={<VerPerfil/>}/>}/>

export default function Album(props) {
  return (
    <div>
      <div id="Cards">
        <Container sx={{ py: 8 }} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://ichef.bbci.co.uk/news/640/cpsprodpb/870D/production/_111437543_197389d9-800f-4763-8654-aa30c04220e4.png"
                    alt="random"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {curso[card-1].nombre_curso} 
                    </Typography>
                    <Typography>
                            {curso[card-1].getDescripcion()} 
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button  size="small"><Link to={"/VerCurso/"+card}>ver</Link></Button>
                    <Button size="small"><Link to={"/Editar/Curso/"+card}>Editar</Link></Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </div>
    </div>
  );
}