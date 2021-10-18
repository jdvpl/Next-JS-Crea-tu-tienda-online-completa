import React, {useState} from 'react'

export default function Hook(props) {

    const [stateCar, setCar] = useState(false);
    const [stateIncrease, setstateIncrease] = useState(0);


const EncenderApagar=()=>{
    // setCar(!stateCar);
    setCar(prevValue=>!prevValue);
}

const IncreaseNumeric=()=>{
    setstateIncrease(prevValue=> prevValue+1);
    
}
    return(
        <div>
            <h2>Carro esta {stateCar ? "Encendido" : "Apagado"} </h2>

            <button 
                onClick={EncenderApagar}
            >{stateCar ? "Apagar" : "Encender"}</button>

            <h1># {stateIncrease}</h1>

            <button 
                onClick={IncreaseNumeric}
            >Aumentar</button>

        </div>
    );
}