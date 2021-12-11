import './Body.css';
import React from 'react';

//import BasicTable from './componentesBasicos/TablaNotas'
//import test  from './clases/clases.js'
import SubirMaterial from './SubirMaterial'
import MaterialCurso from './Material'
import { useStore } from 'react-redux';

//let user = test['user']

export default function Body(props){
    const store = useStore();
    const [estado, setEstado ] = React.useState(false)
    const [tipo, setTipo] = React.useState(store.getState().session.type)
    //const [esProfesor, setEsProfesor] = React.useState(false)
    const esProfesor = (tipo)=>{
        if (tipo === 'Profesor'){
            return true
        }else{
            return false
        }
    }

    return ( 
        <div>
            {esProfesor(tipo)?<button className="btn-curso" onClick={()=>{setEstado(!estado)}} > Subir Material</button>:false}
                {estado?<SubirMaterial/>:<MaterialCurso type={esProfesor(tipo)}/>}
        </div>
    )
}

