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
import SelectedListaInicio from '../componentes/componentesBasicos/ListaIncio';
import test from './clases/clases'
import axios from 'axios';
import { borderRadius } from '@mui/system';

function range(start, stop) {
  if (stop === undefined) {
    stop = start;
    start = 0;
  }
  
  if (start > stop) 
    return [];

  return new Array(stop - start).fill(start).map((el, i) => el + i);
}

//const cards = Array.from(range(1, curso.length+1))

//<Header NameCurso={props.Inicio} componenteMenu={<SelectedListItem Back={<Principal/>}/>} componentes={<SelectedListIncio  perfil={<VerPerfil/>}/>}/>

export default class AlignItemsList  extends React.Component{
  constructor(props){
    super(props)
    //this.listofcurses()
    this.state = {
        cards : Array.from(range(1, 3))
        }  
        console.log(this.props.alumno)
    }
    
  render(){
    return (
      <div>
         <div id="Cards">
          <Container sx={{ py: 10 }} maxWidth="md">
            <Grid container spacing={4}>
              {this.state.cards.map((card) => (
                <Grid item key={card} xs={12} sm={8} md={10}>
                  <Card
                    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        // 16:9
                        pt: '56.25%',
                      }}
                      image="https://tresubresdobles.com/wp-content/uploads/2019/08/skft-912381dcd5b2c45c4a9ce8acf32cfd8c-768x961.jpg"
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Typography gutterBottom variant="h5" component="h2">
                        {} 
                      </Typography>
                      <Typography> 
                      {/*this.state.cursos[card-1].descripcion*/} 
                      </Typography>
                    </CardContent>
                    <CardActions> 
                      {/*<Button  size="small"><Link to={"/VerCurso/"+this.state.cursos[card-1].codigo}>ver</Link></Button>*/}
                      {/*this.state.esProfesor?<Button size="small"><Link to={"/Editar/Curso/"+this.state.cursos[card-1].codigo}>Editar</Link></Button>:null*/}
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
}

