import React from 'react';
//import test from './clases/clases'
import { useState } from 'react';
import axios from 'axios'
import { useEffect } from 'react';
import './ListaNotas.css'

export default function ListaNota(props){
    const [notas, setNotas] = useState([])
    const [editar, setEditar] = useState(true)
    const [tipoPractica, setTipoPractica] = useState('')
    const [puntuacion, setPuntuacion] = useState('')
    const [hidden, setHidden] = useState(true)
    const [eliminar, setEliminar] = useState(true)
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
            <h3>Lista de Notas del Alumno: {props.palumno.nombre+' '+props.palumno.apellido} </h3>
                <div className="box">
                    <div className="CodigoCurso">{notas.map( (nota) =>(
                    <div><input  type="text"  value= {nota.codigCurso} disabled/></div>   
                    ) ) }</div> 
                    <div className="TipoPractica">{notas.map( (nota) =>(
                    <div><input value= {nota.TipoPractica} onChange={(e)=>{
                    }}  disabled={editar}/></div>   
                    ) ) }</div>                                
                    <div className="Puntuacion">{notas.map( (nota, index) =>(
                    <div><input  value= {nota.Puntuacion}  disabled={editar}/></div>   
                    ) ) }</div>                                
            </div>
            <button onClick={()=>{
                setEditar(false)
                setHidden(false)
            }}>Editar Notas</button>
            <button onClick={()=>{
                console.log("codigoAlumn "+  props.palumno.codigo + "codigCurso "+props.idcurso.id +  "TipoPractica "+ tipoPractica)
                setHidden(true)
                setEditar(true)
                axios.post('/nota/'+props.idcurso.id+'/update', 
                        [{
                          "codigoAlumn":props.palumno.codigo, 
                          "codigCurso":props.idcurso.id, 
                          "TipoPractica":tipoPractica
                        },
                        {"Puntuacion":puntuacion}
                        ])
            }}>Guardar</button>
            <button onClick={()=>{
                setEliminar(false)
                console.log(props.palumno.codigo)
            }}>
                Eliminar Nota
            </button>
            <h3 hidden={eliminar}>Eliminar</h3>
            <div ><input hidden={eliminar} value={tipoPractica} onChange={(e)=>{
                setTipoPractica(e.target.value)
            }}/></div>
            <button hidden={eliminar} onClick={()=>{
                            axios.post('/nota/search',{codigCurso:props.idcurso.id, codigoAlumn:props.palumno.codigo, TipoPractica:tipoPractica}).then((response) => {
                                    let body = response.data
                                    console.log(body[0])
                                    axios.delete('/nota/'+body[0]._id+'/delete')
                        
                                })
                            }
            }>Confirmar</button>
            <h3 hidden={hidden}>Tipo de Práctica</h3>
            <div ><input hidden={hidden} value={tipoPractica} onChange={(e)=>{
                    setTipoPractica(e.target.value)
            }}/></div>
            <h3 hidden={hidden}>Nota</h3>
            <div><input hidden={hidden} value={puntuacion} onChange={(e)=>{
                setPuntuacion(e.target.value)
            }}/></div>
        </div>
    )

}
/*<div><input value={nota.TipoPractica} /></div>,     
                    <div><input value={nota.Puntuacion}/></div>     
*/