import { useState } from "react";

function UpdateArrayInState() {
  const [count, setCount] = useState(1);
  const [list, setList] = useState([]);
  function addItem() {
    const itemName = "item" + count;
    setList((previousState) => {
      return [...previousState, itemName];
    });
    setCount((previousState) => previousState + 1);
  }
  return (
    <>
      <h1>List of array</h1>

      <button onClick={addItem}>Add Item</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default UpdateArrayInState;
