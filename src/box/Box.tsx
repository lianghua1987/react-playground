import {Component} from "react";

class Box extends Component<any, any> {

  constructor(props: any) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.props.onRemove(this.props.id);
  }

  render() {
    return (
      <div >
        <div
          style={{
            height: `${this.props.height}em`,
            width: `${this.props.width}em`,
            backgroundColor: this.props.backgroundColor
          }}>
        </div>
        <button onClick={this.handleClick}>X</button>
      </div>
    );
  }
}

export default Box;