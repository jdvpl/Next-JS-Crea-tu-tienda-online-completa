import React, {useState} from 'react'

export default function Hook(props) {

    const [stateCar, setCar] = useState(false);


const EncenderApagar=()=>{
    // setCar(!stateCar);
    setCar(prevValue=>!prevValue);
}
    return(
        <div>
            <h2>Carro esta {stateCar ? "Encendido" : "Apagado"} </h2>

            <button 
                onClick={EncenderApagar}
            >{stateCar ? "Apagar" : "Encender"}</button>
        </div>
    );
}