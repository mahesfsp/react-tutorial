import { useState } from "react"

function MultipleComponent2(){
    const [color,setColor] = useState('red');
    const [brand,setBrand] = useState('yamaha');
    const [model,setModel] = useState('FZ20');
    const [year,setYear] = useState('2020');
    return <>
    <h1>Your Car Info</h1>
    <p>Your car color is {color}</p>
    <p>Your car brand is {brand}</p>
    <p>Your car model is {model}</p>
    <p>Your car year is {year}</p>
    </>
}

export default MultipleComponent2;