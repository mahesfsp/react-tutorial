import { useState } from "react";
function FavoriteColor() {
  const [color, setColor] = useState("Red");
  function changeColor() {
    setColor("purple");
  }

  return (
    <>
      <h1>My Favorite Color is {color}</h1>
      <button onClick={changeColor}>Change Color</button>
    </>
  );
}

export default FavoriteColor;
