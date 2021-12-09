import React from 'react';
import "./generales/general.css";
import "./ListaClases.css";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import CrearClase from './crearClase';
import axios from 'axios';

export default function ListaClases(props) {
    const [clases,setClases   ] = React.useState([]);
    const [curso,setCurso] = React.useState({titulo: 'CursoPrueba',idCurso:props.idCurso});
    const [showCrearButton,setShowCrearButton] = React.useState(false);
    const [showingCrear,setShowingCrear] = React.useState(false);


    const actualizar = function(){
        if(props.session.type == "Profesor"){
            setShowCrearButton(true);
        }
        //axios.get('/retAl/getListClass/'+String(curso.idCurso)).then(function(response){
        axios.get('/retAl/getListClass/CC312').then(function(response){
            setClases(response.data);
        });
    }
    useEffect(()=>{
        //console.log(curso);
        actualizar();
    },[]);

    

    return ( 
        <div id = "LCContainer"> 
            <div className = "frameContainer">
                <div className = 'clasesTitulo'>Lista de Clases</div>
                <div className = 'containerFlex'> 
                    {clases.map(function(clase){
                        return <Link to = {'/Clase/'+String(curso.idCurso)+'/'+String(clase._id)}><button className = 'ClaseButton' >
                            <div >{clase.titulo}</div>
                            <div>{clase.descripcion}</div>
                        </button></Link>
                    })}
                    {showCrearButton?
                    <button className = 'ClaseButton' onClick = {()=>{setShowingCrear(true)}} > Crear  </button>
                    :<div></div>}
                </div>
            </div>
            {showingCrear?
            <div className = 'crearClaseWindow'><CrearClase curso ={String(curso.idCurso)} close =  {()=>{setShowingCrear(false);actualizar();}} />
                <div className = 'CCClosPopUp'><button className = 'closeButton' onClick = {()=>{setShowingCrear(false)}}>X</button></div>
            </div>                  
            :<div></div>}
        </div>
        )   
}
