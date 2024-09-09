import Apple from "./Apple";
import Car from "./Car";
import ItemList from "./ItemList";
import LoginControl from "./LoginControl";
import UserList from "./UserList";
function Garage() {
  /*here i send props as seperate values*/
  // const brand = "Ford";
  // const color = "Red";
  // <Car brand={brand} color={'black'}/>

  const CarInfo = { color: "red", brand: "Ford" };
  const appleInfo = { color: "greeen", type: "pakistan" };
  const carList = [
    {
      brand: "BMW",
      color: "Red",
    },
    { brand: "Tesla", color: "blue" },
    { brand: "Ultima", color: "gray" },
  ];
  return (
    <>
      <h1>I am a Garage</h1>
      <Car CarInfo={CarInfo} />
      <Apple appleInfo={appleInfo} />
      <LoginControl />
      <ItemList />
      <UserList />
      {/* <ul>
        {carList.map((item, index) => (
          <li key={index}>
            {item.brand} - {item.color}
          </li>
        ))}
      </ul> */}

      <ul>
        {carList.map((CarInfo)=><li  style={{ color: 'blue', fontSize: '20px', margin: '10px' }} key={CarInfo.brand}><Car CarInfo={CarInfo}/></li>
        
        )}
      </ul>
    </>
  );
}

export default Garage;
