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

let curso = test['cursos']
let Nota = test['notas']

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
                    <Header NameCurso={curso[nota-1].nombre_curso} componenteMenu={<SelectedListaNotas id={nota}/>} componentes={<SelectedListIncio perfil={<VerPerfil/>}/>}/>
                </div>
                <div id="NCuadro">
                    <BasicTable text_style={state.text} style={state.style} Nota={Nota}/>
                </div>
            </div>
            )
    }


export default VerNotas;