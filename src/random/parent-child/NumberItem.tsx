import {Component} from "react";

interface Props {
  value: number
  remove: any
}

class NumberItem extends Component<Props, any> {

  render() {
    return (
        <span>
          <span> {this.props.value} </span>
          <button onClick={this.props.remove}
                  style={{backgroundColor: "slateblue", color: "white", verticalAlign: "top"}}>X
          </button>
        </span>
    );
  }
}

export default NumberItem;