import './Avatar.css'
import React from 'react';

function Avatar(props) {
        return ( 
        <div id="Foto">
            <img id="FotoPerfil" src={props.avatar} alt="foto"></img>
        </div>
        )
}


export default Avatar