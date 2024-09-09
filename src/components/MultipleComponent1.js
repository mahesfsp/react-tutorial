import React, { useState } from 'react';

function MultipleComponent1() {
  // Define multiple state variables
  const [count, setCount] = useState(0);
  const [color, setColor] = useState('red');
  const [name, setName] = useState('Alice');

  // Handler to increment the count
  const incrementCount = () => {
    setCount(count + 1);
  };

  // Handler to toggle color
  const toggleColor = () => {
    setColor(color === 'red' ? 'blue' : 'red');
  };

  // Handler to update name
  const changeName = () => {
    setName(name === 'Alice' ? 'Bob' : 'Alice');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1 style={{ color: color }}>
        This is class color: {color}
      </h1>
      <button onClick={incrementCount}>Increment Count</button>
      <p>Count: {count}</p>
      <button onClick={toggleColor}>Toggle Color</button>
      <p>Name: {name}</p>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default MultipleComponent1;
