import React, {Component} from "react";

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
    return (
      <div style={{marginTop: "2rem"}}>
        {this.props.foods.join(" ")}
        <br/>
        {this.props.random.join(" ")}
      </div>
    );
  }
}

export default Food;