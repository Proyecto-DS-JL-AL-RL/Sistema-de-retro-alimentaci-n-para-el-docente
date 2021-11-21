import React from 'react';
import Body from './Body'
import Header from './Header'
import SelectedListIncio from './componentesBasicos/MenuInicio';
import VerPerfil from './Perfil';
import test from './clases/clases'
import './Notas.css'
import BasicTable from './componentesBasicos/TablaNotas'
import {useParams} from "react-router-dom";
import SelectedListaNotas from './componentesBasicos/MenuNotas'
import VerNotaAlumnos from './VerNotaAlumnos'

let curso = test['cursos']
let Nota = test['notas']
let profesor = test['user']
//id="NCuadro"
function VerNotas(props) {
        const {nota} = useParams()
        const state = {
            style:"table",
            text:"texto",
            notas: false
        }
            return(
            <div>
                <div>
                    <Header NameCurso={curso[nota-1].nombre_curso} componenteMenu={<SelectedListaNotas isProfesor={profesor.getCondicion()} id={nota}/>} componentes={<SelectedListIncio perfil={<VerPerfil/>}/>}/>
                </div>
                <div>
                    {profesor.getCondicion()?<VerNotaAlumnos curso={nota}/>:<BasicTable text_style={state.text} style={state.style} Nota={Nota}/>}
                </div>
            </div>
            )
    }


export default VerNotas;