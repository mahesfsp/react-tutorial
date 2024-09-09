

import React, { Component } from 'react';

class UpdateObjectInClassComponent extends Component {
  constructor(props) {
    super(props);
    // Initialize state with an object
    this.state = {
      info: {
        count: 0,
        color: 'red',
        name: 'Alice',
      },
    };
  }

  // Handler to increment count
  incrementCount = () => {
    this.setState((prevState) => ({
      info: {
        ...prevState.info,
        count: prevState.info.count + 1,
      },
    }));
  };

  // Handler to toggle color
  toggleColor = () => {
    this.setState((prevState) => ({
      info: {
        ...prevState.info,
        color: prevState.info.color === 'red' ? 'blue' : 'red',
      },
    }));
  };

  // Handler to change name
  changeName = () => {
    this.setState((prevState) => ({
      info: {
        ...prevState.info,
        name: prevState.info.name === 'Alice' ? 'Bob' : 'Alice',
      },
    }));
  };

  render() {
    const { count, color, name } = this.state.info; // Destructuring state object

    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1 style={{ color: color }}>
          This is class color: {color}
        </h1>
        <button onClick={this.incrementCount}>Increment Count</button>
        <p>Count: {count}</p>
        <button onClick={this.toggleColor}>Toggle Color</button>
        <p>Name: {name}</p>
        <button onClick={this.changeName}>Change Name</button>
      </div>
    );
  }
}

export default UpdateObjectInClassComponent;
