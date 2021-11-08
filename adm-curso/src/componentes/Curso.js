import React from 'react';
import Body from './Body'
import Header from './Header'
import test  from './clases/clases.js'
import SelectedListAvatar from './componentesBasicos/MenuAvatar.js';

class VerCurso extends  React.Component {
    
    render() {
        return ( 
            <div>
                <div>
                    <Header NameCurso={test[1].nombre_curso} componentes={<SelectedListAvatar/>}/>
                </div>
                <div>
                    <Body/>
                </div>
        </div>
    )}
}

export default  VerCurso;