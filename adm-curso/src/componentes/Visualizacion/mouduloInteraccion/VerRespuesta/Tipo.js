import React from 'react'
const tipos = [1,2,3,4];
export default function Tipo(props) {
    function cambiar(e){
        props.cambio(e.target.id);
        e.preventDefault();
    }
    return (
        <div>
            {tipos.map(e=>{
                return <button onClick={e =>cambiar(e) } id={e}>{e}</button>
            })}
        </div>
    )
}
