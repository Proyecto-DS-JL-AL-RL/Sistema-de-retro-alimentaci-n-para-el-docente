import React from 'react';
import Header from './Header'
import './notas.css'
//import VerNotaAlumnos from './VerNotaAlumnos'
import SubirNota from './SubirNota';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import axios from 'axios'
//import AlignItemsList from './listaalumnos'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Button from '@mui/material/Button';
import './Inicio.css'
import { useStore } from 'react-redux';
import BasicTable from './componentesBasicos/TablaNotas'
import ListaNota from './ListaNotas'
//let profesor = test['user']

//profesor.condicion = true;

  
function GutterlessList(props) {
    return (      
        <List sx={{width: '100%', maxWidth: 360, bgcolor: '#FFA500' }}>
          {props.alumnos.map((value) => (
         <Button onClick={()=>{
           props.selectalumno(value)
           props.hidden(false)
         }}>
         <ListItem
            key={value}
            disableGutters
          >
            <ListItemText primary={`${value.nombre+' '+value.apellido}`} />
          </ListItem>
          </Button>
        ))}
      </List>
    );
  }
export default function VerNotas(props) {
    const id = useParams()
    const store = useStore();
    const [idCurso,setIdCurso] = useState(store.getState().idCurso);
    const [listcodAlum, setListcodAlum] = useState([])
    const [alumnos, SetAlumnos] = useState([])
    const [alu, setalu] = useState(null) 
    const [hiddenButton, setHiddenButton] = useState(true)
    const [subir, setSubir] = useState(false)
    const [vernota, setVerNota] = useState(false)
    const [tipo, setTipo] = useState(store.getState().session.type)
    const [user, setUser] = useState(store.getState().session.user)
    const esProfesor = (tipo)=>{
      if (tipo === 'Profesor'){
          return true
      }else{
          return false
      }
  }
    useEffect(()=>{
      console.log(store.getState().idCourse)  
      axios.post('/curso/search', {codigo:id.id}).then((response) => {
            let body = response.data;
            setIdCurso(store.getState().idCurso)
            setListcodAlum(body[0].alumnos)
          })
    },[])
  
    useEffect(()=>{
      axios.post('/user/search', {codigo: {$in: listcodAlum}}).then((response) => {
        let body = response.data;
        SetAlumnos(body)
    })
        },[listcodAlum])
    return(

        <div>
        <Header/>
              {esProfesor(tipo)?<div id="contenedor">
              <div>
                                    <h2>Alumnos</h2>
                                    <div>
                                          <GutterlessList hidden={setHiddenButton} selectalumno={setalu} alumnos={alumnos}/>
                                    </div>
                          </div>
                                <div>
                                <button hidden={hiddenButton} onClick={()=>{
                                        setSubir(false)
                                        setVerNota(true)
                                    }}>Ver Notas</button>
                                <button hidden={hiddenButton} onClick={()=>{
                                        setVerNota(false)
                                        setSubir(true)
                                    }}>Subir Nota</button>
                                <button hidden={hiddenButton} onClick={()=>{
                                      setHiddenButton(true)
                                      setVerNota(false)
                                      setSubir(false)
                                    }
                                }>cancel</button>
                                {subir?<SubirNota  palumno={alu} idcurso={id}/>:false}
                                {vernota?<ListaNota idcurso={id} palumno={alu}/>:false}
                                </div> 
                  </div>:
                    <BasicTable curso={store.getState().idCurso} user={user}/>}
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