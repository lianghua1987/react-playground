import React, {Component} from "react";
import {Link, NavLink} from "react-router-dom";
import './random.css';
import {withParams} from "../router-wrapper";

class Food extends Component<any, any> {

  static defaultProps = {
    foods: [
      "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍎",
      "🍏", "🍐", "🍒", "🍓", "🥝", "🍅", "🥑"
    ],
    random: ["😴", "😄", "😃", "⛔", "🎠", "🚓", "🚇", "🥦", "🍅", "🥒", "🍩", "🥕"]
  }

  constructor(props: any) {
    super(props);
  }

  render() {
    const name = this.props.params.name;
    const handleClick = () => {
      this.props.history.push("/");
    };
    return (
      <div style={{marginTop: "1rem"}}>
        <nav className="Food-nav">
          <NavLink to="/food/home">Food</NavLink>
          <NavLink to="/food/random">Random</NavLink>
        </nav>
        {name === 'home' && this.props.foods.join(" ")}
        {name === 'random' && this.props.random.join(" ")}
        <Link to="/">Link</Link>
        <button onClick={handleClick}>Save</button>

      </div>
    );
  }
}

export default withParams(Food);