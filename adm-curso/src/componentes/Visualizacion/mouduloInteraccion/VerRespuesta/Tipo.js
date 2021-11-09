import React from 'react'
const tipos = [1,2,3,4];
export default function Tipo(props) {
    return (
        <div>
            {tipos.map(e=>{
                return <button onClick={e => props.cambio(e.target.id)} id={e}>{e}</button>
            })}
        </div>
    )
}
