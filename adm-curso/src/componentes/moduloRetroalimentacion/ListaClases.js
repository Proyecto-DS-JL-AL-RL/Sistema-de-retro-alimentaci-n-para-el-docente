import React from 'react';
import "./generales/general.css";
import "./formularioVista.css";
import FormPregunta from './formPregunta';
import { Link } from 'react-router-dom';

export default function ListaClases() {
    const [clase,setClase   ] = React.useState([
        {titulo : ' Clase1' , description : 'descripcion1' },
        {titulo : ' Clase2' , description : 'descripcion2' },
        {titulo : ' Clase3' , description : 'descripcion3' },
    ]);
    const [curso,setCurso] = React.useState({titulo: 'CursoPrueba',idCurso:9});



    return ( 
        <div id = "LCContainer">            
            <div className = "frameContainer">
                <div className = 'containerFlex'> 
                    {this.state.Clases.map(function(clase){
                        return <Link to = {'/Clase/'+String(curso.idCurso)}><div className = 'ClaseButton'>
                            <div>{clase.titulo}</div>
                            <div>{clase.description}</div>
                        </div></Link>
                    })}
                </div>
            </div>
           
        </div>
        )   
}
