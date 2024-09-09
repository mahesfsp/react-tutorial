// Counter.js
import React, { Component } from 'react'; // Import Component from React

class CounterClass extends Component {
  // Define the initial state in the constructor
  constructor(props) {
    super(props); // Call the parent constructor
    // Initialize state with a count value
    this.state = {
      count: 0,
    };
  }

  // Method to increment count
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 }); // Update state using setState
  };

  // Method to decrement count
  handleDecrement = () => {
    this.setState({ count: this.state.count - 1 }); // Update state using setState
  };

  // Render method to display the component
  render() {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <h1>Counter: {this.state.count}</h1> {/* Access state with this.state */}
        <button onClick={this.handleIncrement} style={{ marginRight: '10px' }}>
          Increment
        </button>
        <button onClick={this.handleDecrement}>Decrement</button>
      </div>
    );
  }
}

export default CounterClass;
