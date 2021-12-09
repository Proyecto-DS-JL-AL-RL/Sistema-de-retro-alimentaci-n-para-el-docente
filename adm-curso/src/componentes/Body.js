import './Body.css';
import React from 'react';

//import BasicTable from './componentesBasicos/TablaNotas'
import test  from './clases/clases.js'
import SubirMaterial from './SubirMaterial'
import MaterialCurso from './Material'

let user = test['user']



export default function Body(props){
    const [estado, setEstado ]= React.useState(false)
    return ( 
        <div>
            {console.log(props.tipo)}
            {user.getCondicion()?<button className="btn-curso" onClick={()=>{setEstado(!estado)}} > Subir Material</button>:false}
                {estado?<SubirMaterial/>:<MaterialCurso />}
        </div>
    )
}

