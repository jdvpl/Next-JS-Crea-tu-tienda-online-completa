import React, {useState, useEffect} from 'react'

export default function Hook(props) {

    const [stateCar, setCar] = useState(false);
    const [stateIncrease, setstateIncrease] = useState(0);
    const [stateContar, setstateContar] = useState(0);


const EncenderApagar=()=>{
    // setCar(!stateCar);
    setCar(prevValue=>!prevValue);
    setstateContar(stateContar+1);
}

useEffect(() => {
    console.log('Total '+stateContar)
}, [stateContar])

const IncreaseNumeric=()=>{
    setstateIncrease(prevValue=> prevValue+1);
    
}
    return(
        <div>
            <h2>Carro esta {stateCar ? "Encendido" : "Apagado"} </h2>
            <h4>Click: {stateContar}</h4>
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