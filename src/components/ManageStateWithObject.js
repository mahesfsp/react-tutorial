
import React, { useState } from 'react';

function ManageStateWithObject() {
  // Define state with an object
  const [state, setState] = useState({
    count: 0,
    color: 'red',
    name: 'Alice'
  });

  // Handler to increment the count
  const incrementCount = () => {
    setState(prevState => ({
      ...prevState,
      count: prevState.count + 1
    }));
  };

  // Handler to toggle color
  const toggleColor = () => {
    setState(prevState => ({
      ...prevState,
      color: prevState.color === 'red' ? 'blue' : 'red'
    }));
  };

  // Handler to change name
  const changeName = () => {
    setState(prevState => ({
      ...prevState,
      name: prevState.name === 'Alice' ? 'Bob' : 'Alice'
    }));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h1 style={{ color: state.color }}>
        This is class color: {state.color}
      </h1>
      <button onClick={incrementCount}>Increment Count</button>
      <p>Count: {state.count}</p>
      <button onClick={toggleColor}>Toggle Color</button>
      <p>Name: {state.name}</p>
      <button onClick={changeName}>Change Name</button>
    </div>
  );
}

export default ManageStateWithObject;
