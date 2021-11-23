import * as React from 'react';
import Header from './Header';
import SelectedListIncio from './componentesBasicos/MenuInicio.js';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './Inicio.css'
import VerPerfil from '../componentes/Perfil';
import {Link} from 'react-router-dom';
import { useState } from 'react';
import SelectedListaInicio from '../componentes/componentesBasicos/ListaIncio';
import test from './clases/clases'

let curso = test['cursos']
let user = test['user']
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
  const [esProfesor, setEsProfesor]=useState(user.getCondicion());
  return (
    <div>
        <Header NameCurso={'Cursos'} userID={user} componenteMenu={esProfesor?<SelectedListaInicio/>:null} componentes={<SelectedListIncio  perfil={<VerPerfil/>}/>}/>
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
                    {esProfesor?<Button size="small"><Link to={"/Editar/Curso/"+card}>Editar</Link></Button>:null}
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