import React, { Component } from 'react';

class Greeting extends Component {
  // Step 1: Initialize state in the constructor
  constructor(props) {
    super(props);
    // Define the initial state
    this.state = {
      message: 'Hello, World!'
    };
  }

  // Step 2: Define a method to update the state
  updateMessage = () => {
    this.setState({ message: 'Hello, React!' });
  };

  // Step 3: Render method to display the component
  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <button onClick={this.updateMessage}>Change Message</button>
      </div>
    );
  }
}

export default Greeting;
