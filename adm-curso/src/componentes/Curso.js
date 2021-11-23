import React from 'react';
import test  from './clases/clases.js'
import {useParams} from "react-router-dom";
import PagCurso from '../paginas/pagCurso';

let curso = test['cursos']



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