import React from 'react';
//"FotoPerfil"
function Avatar(props) {
        return ( 
        <div>
            <img id={props.style} src={props.avatar} alt="foto"></img>
        </div>
        )
}


export default Avatar