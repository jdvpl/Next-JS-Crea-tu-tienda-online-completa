import React from 'react'

export default function Objecto(props) {
    const {user, saludarFn}= props;

    const {nombre,edad,ciudad,profesion="Fumador"}=user;

    return(
        <div>
            <h2>Objetos:Hola  {nombre} tiene {edad} años,  de la ciudad {ciudad} <br/> y es {profesion}</h2>

            <button 
                onClick={() => saludarFn(nombre)}
            >Hola</button>
        </div>
    );
}