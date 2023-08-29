import {Component} from "react";

class Clock extends Component<any, any> {
  timerId: any;

  constructor(props: any) {
    super(props);
    this.state = {time: new Date()};
    // console.log("In Constructor");
  }

  componentDidMount() {
    // console.log("In ComponentDidMount");
    this.timerId = setInterval(() => {
      this.setState({time: new Date()})
    }, 500);
  }

  render() {
    // console.log("In Render");
    return <div>{this.state.time.toLocaleTimeString()}</div>;
  }
}

export default Clock;