import React from 'react';
//import test from './clases/clases'
import './EditarCurso.css'
import { useState } from 'react';
import './subNota.css'
import axios from 'axios'
import { useEffect } from 'react';


export default function ListaNota(props){
    const [notas, setNotas] = useState([])
    useEffect(()=>{
        setNotas([]);
        console.log(props.idcurso)
        axios.post('/nota/search',{codigCurso:props.idcurso.id, codigoAlumn:props.palumno.codigo}).then((response) => {
            let body = response.data;
            setNotas(body);
        })
    },[props.idcurso, props.palumno.codigo])

    return (
        <div>
            <h3>Lista de Notas</h3>
                <div id="sEdit">
                    <h3>Nota del Alumno {props.palumno.nombre+' '+props.palumno.apellido}</h3>
                    <div>{notas.map( (nota) =>(
                    <div><input value= {nota.codigCurso}/></div>   
                    ) ) }</div> 
                    <div>{notas.map( (nota) =>(
                    <div><input value= {nota.TipoPractica}/></div>   
                    ) ) }</div>                                
                    <div>{notas.map( (nota) =>(
                    <div><input value= {nota.Puntuacion}/></div>   
                    ) ) }</div>                                

            </div>
        </div>
    )

}
/*<div><input value={nota.TipoPractica} /></div>,     
                    <div><input value={nota.Puntuacion}/></div>     
*/