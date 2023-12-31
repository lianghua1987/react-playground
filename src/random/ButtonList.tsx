import {Component} from "react";
import {v4 as uuidv4} from 'uuid';
import './random.css';

class ButtonList extends Component<any, any> {
  static defaultProps = {
    colors: ["#e056fd", "#eb4d4b", "#badc58", "#f0932b"]
  }

  constructor(props: any) {
    super(props);
    this.state = {color: 'cyan'};
  }

  changeColor(color: string) {
    this.setState({color})
  }

  render() {
    return (
      <div className='ButtonList' style={{backgroundColor: this.state.color, height: '5rem', display: "flex"}}>
        {this.props.colors.map((c: string, index: number) => {
          const style = {backgroundColor: c};
          return <button style={style} className="ButtonList-button" onClick={this.changeColor.bind(this, c)}
                         key={uuidv4()}>Click on me!</button>
        })}
      </div>
    )
  }
}

export default ButtonList;