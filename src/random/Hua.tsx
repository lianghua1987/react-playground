import {Component} from "react";
import './Hua.css'

interface Props {
  name: string
  mood?: string,
  foods: string[]
}

class Hua extends Component<Props, {}> {
  static defaultProps = {
    mood: 'happy',
    foods: [
      "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🍎",
      "🍏", "🍐", "🍒", "🍓", "🥝", "🍅", "🥑"
    ]
  };

  render() {
    return (
      <div className="Hua">
        <div>Hello {this.props.name}, today's mood is {this.props.mood}</div>
        <div>{this.props.foods.join(" ")}</div>
      </div>
    );
  };
}

export default Hua;