import React from 'react';
import Body from './Body'
import Header from './Header'
import test  from './clases/clases.js'
import SelectedListAvatar from './componentesBasicos/MenuAvatar.js';
import VerPerfil from './Perfil'
let curso = test['cursos']



class VerCurso extends  React.Component {
    
    render() {
        return ( 
            <div>
                <div>
                    <Header NameCurso={curso[0].nombre_curso} componentes={<SelectedListAvatar perfil={<VerPerfil/>}/>}/>
                </div>
                <div>
                    <Body/>
                </div>
        </div>
    )}
}

export default  VerCurso;