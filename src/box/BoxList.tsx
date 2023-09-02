import {Component} from "react";
import {IBox} from "./IBox";
import BoxForm from "./BoxForm";
import Box from "./Box";

class BoxList extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      boxes: []
    };
    this.createHandler = this.createHandler.bind(this);
    this.removeHandler = this.removeHandler.bind(this);
  }

  createHandler(box: IBox) {
    this.setState({boxes: [...this.state.boxes, box]});
  }

  removeHandler(id: string) {
    const boxes = this.state.boxes.filter((b: IBox) => b.id !== id);
    this.setState({boxes})
  }

  render() {
    const boxes = this.state.boxes.map((box: any) => <Box {...box} key={box.id} onRemove={this.removeHandler}></Box>)
    return (
      <div style={{
        backgroundColor: "white",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyItems: "center",
        color: "black"
      }}>
        <h1>Color Box Maker Thingy</h1>
        <div>
          {boxes}
        </div>
        <BoxForm onCreate={this.createHandler}/>
      </div>
    );
  }
}

export default BoxList;