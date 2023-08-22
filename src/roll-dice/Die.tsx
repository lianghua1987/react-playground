import {Component} from "react";
import "./Die.css";

interface Props {
  face: string,
  animation: string
}

class Die extends Component<Props, {}> {

  render() {
    return <i className={`Die fa-solid fa-dice-${this.props.face} ${this.props.animation}`}></i>;
  }
}

export default Die;