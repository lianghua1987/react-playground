import {Component} from "react";

class State extends Component {

  state = {value: "success"};


  componentWillUnmount() {
    console.log("componentWillUnmount called");
  }

  componentDidMount() {
    console.log("componentDidMount called");
  }

  render() {
    console.log("render called");
    return <div>This is a state test: {this.state.value}</div>;
  }
}
export default State; 