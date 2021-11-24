import React from 'react';
import "./generales/general.css";
import "./ListaClases.css";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import CrearClase from './crearClase';

export default function ListaClases(props) {
    const [clases,setClases   ] = React.useState([
        {titulo : ' Clase1' , description : 'descripcion1' ,idClase :1},
        {titulo : ' Clase2' , description : 'descripcion2' ,idClase : 2},
        {titulo : ' Clase3' , description : 'descripcion3' , idClase: 3 },
    ]);
    const [curso,setCurso] = React.useState({titulo: 'CursoPrueba',idCurso:props.idCurso});
    const [showCrearButton,setShowCrearButton] = React.useState(false);
    const [showingCrear,setShowingCrear] = React.useState(false);


    useEffect(()=>{
        console.log(props);
        if(props.session.type == "Profesor"){
            setShowCrearButton(true);
        }
    },[]);

    return ( 
        <div id = "LCContainer">            
            <div className = "frameContainer">
                <div className = 'clasesTitulo'>Lista de Clases</div>
                <div className = 'containerFlex'> 
                    {clases.map(function(clase){
                        return <Link to = {'/Clase/'+String(curso.idCurso)+'/'+String(clase.idClase)}><button className = 'ClaseButton' >
                            <div >{clase.titulo}</div>
                            <div>{clase.description}</div>
                        </button></Link>
                    })}
                    {showCrearButton?
                    <button className = 'ClaseButton' onClick = {()=>{setShowingCrear(true)}} > Crear  </button>
                    :<div></div>}
                </div>
            </div>
            {showingCrear?
            <div className = 'crearClaseWindow'><CrearClase curso ={String(curso.titulo)}  />
                <div className = 'CCClosPopUp'><button className = 'closeButton' onClick = {()=>{setShowingCrear(false)}}>X</button></div>
            </div>                  
            :<div></div>}
        </div>
        )   
}
