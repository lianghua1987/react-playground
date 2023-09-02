import {Component} from "react";

class Clock extends Component<any, any> {
  timerId: any;

  constructor(props: any) {
    // console.log("In Constructor");
    super(props);
    this.state = {time: new Date()};

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