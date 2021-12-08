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
//import test from './clases/clases'
import axios from 'axios';
//import { borderRadius } from '@mui/system';

//let curso = test['cursos']
//let user = test['user']
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

export default class Inicio  extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        cursos:[],
        esProfesor:true,//user.getCondicion(), 
        cards:[]
      };
      //this.listofcurses()
      //this.cards = Array.from(range(1, this.state.cursos.length+1))
  
      axios.post('/user/search', {codigo:this.props.iduser}).then((response) => {
                let body = response.data;
                if(body[0].condicion === "Profesor"){
                  this.setState({esProfesor:true})
                }
                if(body[0].condicion === "Alumno"){
                  this.setState({esProfesor:false})
                };
                console.log(this.state.esProfesor)
                if(this.state.esProfesor){
                  axios.post('/curso/search', {IDProfe:this.props.iduser}).then((response) => {
                    let body = response.data;
                    this.setState({cursos:body})
                    this.setState({cards:Array.from(range(1, this.state.cursos.length+1))})
                  })
                }else{
                  axios.post('/curso/search', {alumnos:this.props.iduser}).then((response) => {
                    let body = response.data;
                    this.setState({cursos:body})
                    this.setState({cards:Array.from(range(1, this.state.cursos.length+1))})
                })      
              }    
        }) 
  
}//?:null
  render(){
    return (
      <div>
          <Header NameCurso={'Cursos'} componenteMenu={<SelectedListaInicio condicion={this.state.esProfesor}/>} componentes={<SelectedListIncio  perfil={<VerPerfil/>}/>}/>
        <div id="Cards">
          <Container sx={{ py: 8 }} maxWidth="md">
            <Grid container spacing={4}>
              {this.state.cards.map((card) => (
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
                        {this.state.cursos[card-1].nombre} 
                      </Typography>
                      <Typography> 
                      {this.state.cursos[card-1].descripcion} 
                      </Typography>
                    </CardContent>
                    <CardActions> 
                      <Button  size="small"><Link to={"/VerCurso/"+this.state.cursos[card-1].codigo}>ver</Link></Button>
                      {this.state.esProfesor?<Button size="small"><Link to={"/Editar/Curso/"+this.state.cursos[card-1].codigo}>Editar</Link></Button>:null}
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

