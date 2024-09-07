import Car from "./Car";
function Garage(){

    /*here i send props as seperate values*/
    // const brand = "Ford";
    // const color = "Red";
    // <Car brand={brand} color={'black'}/>




    const CarInfo = {color:"red" , brand:"Ford"}


    return (
        <>
        <h1>I am a Garage</h1>
        <Car CarInfo={CarInfo}/>
        </>

    )
}


export default Garage;
