import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './Inicio.css'
import {Link} from 'react-router-dom';
import { useState } from 'react';
import { useStore } from 'react-redux';
import {setHeaderContent , setIdCourse } from '../feature/sessionSlice';
//import test from './clases/clases'
import axios from 'axios';
import '../paginas/Principal.css'
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

export default function Inicio (props){
  const store = useStore();
  const[cursos,setCursos] = useState([]);
  const [esProfesor,setEsProfesor] = useState(true);//user.getCondicion(), 
  const [cards,setCards] = useState([]);

      //this.listofcurses()
      //this.cards = Array.from(range(1, this.state.cursos.length+1))
  React.useEffect(()=>{
    store.dispatch(setHeaderContent('Cursos'));
    store.dispatch(setIdCourse(null));
    axios.post('/login/setCourse',{idCur:null});

    axios.post('/user/search', {codigo:props.iduser}).then((response) => {  
      let body = response.data;
      if(body[0].condicion === "Profesor"){
        axios.post('/curso/search', {IDProfe:props.iduser}).then((response) => {          
          let body = response.data;
          console.log(body);
          setEsProfesor(true);
          setCursos(body);
          setCards(Array.from(range(1, body.length+1)));         
        })
      }else{
        axios.post('/curso/search', {alumnos:props.iduser}).then((response) => {
          let body = response.data;
          setCursos(body);
          setEsProfesor(false);
          setCards(Array.from(range(1, body.length+1)));           
      })      
    }    
}) 
},[])   ; 
    return (
      <div className = 'containerGen'>
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
                        {cursos[card-1].nombre} 
                      </Typography>
                      <Typography> 
                      {cursos[card-1].descripcion} 
                      </Typography>
                    </CardContent>
                    <CardActions> 
                      <Button  size="small"><Link to={"/VerCurso/"+cursos[card-1].codigo}>ver</Link></Button>
                      {esProfesor?<Button size="small"><Link to={"/Editar/Curso/"+cursos[card-1].codigo}>Editar</Link></Button>:null}
                      {esProfesor?<Button onClick={()=>{axios.delete('/curso/'+cursos[card-1]._id+'/delete')}} size="small">Eliminar</Button>:null}
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

