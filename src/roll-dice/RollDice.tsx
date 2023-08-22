import React, {Component} from "react";
import Die from "./Die";
import "./RollDice.css";

interface Props {
}

class RollDice extends Component<any, any> {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
    animations: ["fa-beat", "fa-beat-fade", "fa-bounce", "fa-fade", "fa-flip", "fa-shake", "fa-spin", "fa-spin-reverse", "fa-spin-pulse"]
  }

  constructor(props: Props) {
    super(props);
    this.state = {die1: "one", die2: "one", rolling: false, animation: ""}
    this.roll = this.roll.bind(this);
  }

  roll() {
    const die1 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const die2 = this.props.sides[Math.floor(Math.random() * this.props.sides.length)];
    const animation = this.props.animations[Math.floor(Math.random() * this.props.animations.length)];
    this.setState({die1, die2, rolling: true, animation});
    setTimeout(() => {
      this.setState({rolling: false, animation: ""});
    }, 2000)
  }

  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-btn-group">
          <Die face={this.state.die1} animation={this.state.animation}/>
          <Die face={this.state.die2} animation={this.state.animation}/>
        </div>
        <button onClick={this.roll} disabled={this.state.rolling}>{this.state.rolling ? 'Rolling...' : 'Roll Dice!'}</button>
      </div>
    );
  }

}

export default RollDice;