import {Component} from "react";

class State extends Component {

  state = {value: "success"};

  render() {
    return <div>This is a state test: {this.state.value}</div>;
  }
}
export default State; 