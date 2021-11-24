import React from 'react';
import test  from './clases/clases.js'
import {useParams} from "react-router-dom";
import PagCurso from '../paginas/pagCurso';

let curso = test['cursos']
let user = test['user']


function VerCurso(props) {
        const {id} = useParams()

        return ( 
            <div>
                
                <div>
                    <PagCurso id = {id} session = {props.session}/>
                </div>

        </div>
    )
}


export default  VerCurso;