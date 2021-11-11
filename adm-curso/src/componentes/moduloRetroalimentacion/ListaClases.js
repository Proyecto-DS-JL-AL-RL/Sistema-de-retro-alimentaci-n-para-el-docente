import React from 'react';
import "./generales/general.css";
import "./ListaClases.css";
import FormPregunta from './formPregunta';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router';
import CrearClase from './crearClase';

export default function ListaClases() {
    const [clases,setClases   ] = React.useState([
        {titulo : ' Clase1' , description : 'descripcion1' ,idClase :1},
        {titulo : ' Clase2' , description : 'descripcion2' ,idClase : 2},
        {titulo : ' Clase3' , description : 'descripcion3' , idClase: 3 },
    ]);
    const [curso,setCurso] = React.useState({titulo: 'CursoPrueba',idCurso:useParams().idCurso});
    const [vista,setVista] = React.useState(0);
    const [showingCrear,setShowingCrear] = React.useState(false);




    return ( 
        <div id = "LCContainer">            
            <div className = "frameContainer">
                <div className = 'clasesTitulo'>Lista de Clases</div>
                <div className = 'containerFlex'> 
                    {clases.map(function(clase){
                        return <Link to = {'/Clase/'+String(curso)+'/'+String(clase.idClase)}><button className = 'ClaseButton'>
                            <div>{clase.titulo}</div>
                            <div>{clase.description}</div>
                        </button></Link>
                    })}
                    <button className = 'ClaseButton' onClick = {()=>{setShowingCrear(true)}} > Crear  </button>
                </div>
            </div>
            {showingCrear?
            <div className = 'crearClaseWindow'><CrearClase curso ={String(curso.titulo)} />
                <div className = 'CCClosPopUp'><button className = 'closeButton' onClick = {()=>{setShowingCrear(false)}}>X</button></div>
            </div>                  
            :<div></div>}
        </div>
        )   
}
