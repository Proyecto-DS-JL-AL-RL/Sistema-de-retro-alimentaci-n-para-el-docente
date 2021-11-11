import React from 'react';
import Body from './Body'
import Header from './Header'
import test  from './clases/clases.js'
import SelectedListAvatar from './componentesBasicos/MenuAvatar.js';
import VerPerfil from './Perfil';
import {useParams} from "react-router-dom";

let curso = test['cursos']



function VerCurso(props) {
        const {id} = useParams()

        return ( 
            <div>
                <div>
                    <Header NameCurso={curso[id-1].nombre_curso} componentes={<SelectedListAvatar curso_id={id}   perfil={<VerPerfil/>}/>}/>
                </div>
                <div>
                    <Body/>
                </div>
        </div>
    )
}


export default  VerCurso;