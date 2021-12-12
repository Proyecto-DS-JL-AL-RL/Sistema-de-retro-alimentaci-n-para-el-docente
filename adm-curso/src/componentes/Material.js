import * as React from 'react';
//import SelectedListIncio from './componentesBasicos/MenuInicio.js';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import './Inicio.css'
//import VerPerfil from '../componentes/Perfil';
import {Link} from 'react-router-dom';
//import SelectedListaInicio from '../componentes/componentesBasicos/ListaIncio';
//import test from './clases/clases'
import axios from 'axios';
import { withRouter } from "react-router";  
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

class MaterialCurso  extends React.Component{
  constructor(props){
      super(props);
      const id = this.props.match.params.id;
      this.state = {
        material:[],
        esProfesor:true,//user.getCondicion(), 
        cards:[]
      };
      //this.listofcurses()
      //this.cards = Array.from(range(1, this.state.cursos.length+1))
    axios.post('/material/search', {curso:id}).then((response) => {
                    let body = response.data;
                    this.setState({material:body})
                    this.setState({cards:Array.from(range(1, this.state.material.length+1))})
        }) 
}//?:null
  render(){
    return (
      <div>
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
                        {this.state.material[card-1].titulo} 
                      </Typography>
                      <Typography> 
                      {this.state.material[card-1].description} 
                      </Typography>
                    </CardContent>
                    <CardActions> 
                      <Button  size="small"><a href={'http://localhost:4000/static/'+this.state.material[card-1].file}>ver</a></Button>
                      {this.props.type?<Button size="small"><Link to={"/EditarMaterial/"+this.state.material[card-1].file}>Editar</Link></Button>:null}
                      {this.props.type?<Button onClick={()=>{axios.delete('/material/'+this.state.material[card-1]._id+'/delete')}} size="small">Eliminar</Button>:null}
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

export default withRouter(MaterialCurso)