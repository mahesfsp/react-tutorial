const { Component } = require("react");

class FavoriteColorClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "red",
    };
    // Bind changeColor method to this class instance
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
    this.setState({ color: "purple" });
  }
  render() {
    return (
      <>
        <h1>This is class color:{this.state.color}</h1>
        <button onClick={this.changeColor}>change color</button>
      </>
    );
  }
}

export default FavoriteColorClass;
