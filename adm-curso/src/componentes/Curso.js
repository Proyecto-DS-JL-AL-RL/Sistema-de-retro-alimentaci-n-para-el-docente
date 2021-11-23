import React from 'react';
import Body from './Body'
import Header from './Header'
import test  from './clases/clases.js'
import SelectedListAvatar from './componentesBasicos/MenuAvatar.js';
import VerPerfil from './Perfil';
import {useParams} from "react-router-dom";
import PagCurso from '../paginas/pagCurso';

let curso = test['cursos']
let user = test['user']


function VerCurso(props) {
        const {id} = useParams()

        return ( 
            <div>
                
                <div>
                    <PagCurso id = {id}/>
                </div>

        </div>
    )
}


export default  VerCurso;