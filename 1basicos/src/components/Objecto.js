import React from 'react'

export default function Objecto(props) {
    console.log(props)

    return(
        <div>
            <h2>Objetos:Hola  {props.user.nombre} tiene {props.user.edad} años,  de la ciudad {props.user.ciudad} <br/> y es {props.user.profesion}</h2>

            <button 
                onClick={() => props.saludarFn(props.user.nombre)}
            >Hola</button>
        </div>
    );
}