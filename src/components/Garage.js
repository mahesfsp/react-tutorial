import Apple from "./Apple";
import Car from "./Car";
import ItemList from "./ItemList";
import LoginControl from "./LoginControl";
import UserList from "./UserList";
function Garage(){

    /*here i send props as seperate values*/
    // const brand = "Ford";
    // const color = "Red";
    // <Car brand={brand} color={'black'}/>




    const CarInfo = {color:"red" , brand:"Ford"}
const appleInfo ={color:"greeen",type:"pakistan"}

    return (
        <>
        <h1>I am a Garage</h1>
        <Car CarInfo={CarInfo}/>
        <Apple appleInfo={appleInfo}/>
        <LoginControl/>
        <ItemList/>
        <UserList/>
        </>

    )
}


export default Garage;
