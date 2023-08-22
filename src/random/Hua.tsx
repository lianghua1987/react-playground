import {Component} from "react";
import './Hua.css'

interface Props {
  name: string
  mood?: string
}

class Hua extends Component<Props, {}> {
  static defaultProps = {
    mood: 'happy'
  }

  render() {
    return <div className="Hua">Hello {this.props.name}, today's mood is {this.props.mood}</div>;
  };
}

export default Hua;