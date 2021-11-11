import React from 'react';
import { useHistory } from 'react-router-dom';
import './Cabecera.css';

export default function Cabecera() {
    const history = useHistory();
    return (
        <div className="cabecera">
            <div className="opciones">-</div>
            <button className="profile" onClick={e=>{}} >
                <img className="imgProfile" src="https://i.pinimg.com/736x/c1/d4/ab/c1d4ab48262c819bc8c865818d1b2cff.jpg"/>
                <div className="lblmg"> VerPerfil</div>
            </button>
            
        </div>
    )
}
