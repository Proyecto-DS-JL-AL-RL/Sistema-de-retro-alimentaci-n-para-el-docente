import React from 'react';
import Header from './Header'
import './notas.css'
import test from './clases/clases'
//import VerNotaAlumnos from './VerNotaAlumnos'
import SubirNota from './SubirNota';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios'
//import AlignItemsList from './listaalumnos'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import './Inicio.css'
import { useStore } from 'react-redux';
import BasicTable from './componentesBasicos/TablaNotas'
let profesor = test['user']

profesor.condicion = true;

function range(start, stop) {
    if (stop === undefined) {
      stop = start;
      start = 0;
    }
    
    if (start > stop) 
      return [];
  
    return new Array(stop - start).fill(start).map((el, i) => el + i);
  }
  

export default function VerNotas(props) {
    const store = useStore();
    const [idCurso,setIdCurso] = React.useState(useParams().nota);
    const [listcodAlum, setListcodAlum] = useState([])
    const [alumnos, SetAlumnos] = useState([])
    const [alu, setalu] = useState('') 
    const [subir, setSubir] = useState(false)
    const [tipo, setTipo] = React.useState(store.getState().session.type)
    const [user, setUser] = React.useState(store.getState().session.user)
    const state = {
        cards : Array.from(range(1, alumnos.length+1))
    }
    const esProfesor = (tipo)=>{
      if (tipo === 'Profesor'){
          return true
      }else{
          return false
      }
  }
    useEffect(()=>{
        axios.post('/curso/search', {codigo:idCurso}).then((response) => {
            let body = response.data;
            setListcodAlum(body[0].alumnos)
        })
        
        axios.post('/user/search', {codigo: {$in: listcodAlum}}).then((response) => {
            let body = response.data;
            SetAlumnos(body)
        })
    },[])

    return(

        <div>
        <Header/>
              {esProfesor(tipo)?<div id="contenedor">
                                <div>
                                <button onClick={()=>{
                                        setSubir(false)
                                    }}>Ver Notas</button>
                                <button onClick={()=>{
                                        setSubir(true)
                                    }}>Subir Nota</button>
                                {subir?<SubirNota  palumno={alu} idcurso={idCurso}/>:false}
                                {console.log(alu)}
                                </div>
                                <div>
                                    <p>Alumnos</p>
                                    <div>
                        <div id="Cards">
                          <Container sx={{ py: 10 }} maxWidth="md">
                            <Grid container spacing={4}>
                              {state.cards.map((card) => (
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
                                      <Typography gutterBottom variant="h5" component="h5">
                                        {alumnos[card-1].apellido} 
                                      </Typography>
                                    </CardContent>
                                    <CardActions> 
                                      {<Button onClick={()=>{
                                          setSubir(true)
                                          setalu(alumnos[card-1])
                //                          setcodigalu(alumnos[card-1])
                                      }}size="small">subir nota</Button>}
                                      {/*this.state.esProfesor?<Button size="small"><Link to={"/Editar/Curso/"+this.state.cursos[card-1].codigo}>Editar</Link></Button>:null*/}
                                    </CardActions>
                                  </Card>
                                </Grid>
                              ))}
                            </Grid>
                          </Container>
                        </div>
                      </div>
                </div>
            </div>:
                    <BasicTable curso={idCurso} user={user}/>}
        </div>
    )
}




/*
import React from 'react';
import Body from './Body'
import Header from './Header'
import SelectedListIncio from './componentesBasicos/MenuInicio';
import VerPerfil from './Perfil';
import test from './clases/clases'
//import './Notas.css'
//id="NCuadro"
function VerNotas(props) {
    
}


export default VerNotas;

const {nota} = useParams()
        const state = {
            style:"table",
            text:"texto",
            notas: false
        }
            return(
            <div>
                <div>
                    <Header NameCurso={curso[nota-1].nombre_curso} componenteMenu={<SelectedListaNotas isProfesor={profesor.getCondicion()} id={nota}/>} componentes={<SelectedListIncio perfil={<VerPerfil/>}/>}/>
                </div>
                <div>
                    {profesor.getCondicion()?<VerNotaAlumnos curso={nota}/>:<BasicTable text_style={state.text} style={state.style} Nota={Nota}/>}
                </div>
            </div>
            )
 
*/