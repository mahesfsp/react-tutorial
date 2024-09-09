

import { useState } from "react"

function ManageStateAsObject(){
  const [car,setCar] = useState(
    {
        color:"red",
        brand:"yamaha",
        model:"fz20",
        year:"2020"
    });
    function updateColor(){
        setCar(previousState=>{
            return {...previousState,color:"purple"}
        })
    }
  
    return <>
    <h1>Your Car Info</h1>
    <p>Your car color is {car.color}</p>
    <p>Your car brand is {car.brand}</p>
    <p>Your car model is {car.model}</p>
    <p>Your car year is {car.year}</p>
    <button onClick={updateColor}>Change Color</button>
    </>
}

export default ManageStateAsObject;