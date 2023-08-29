import {Component} from "react";
import BetterNumberItem from "./BetterNumberItem";
import {v4 as uuidv4} from 'uuid';
class NumberList extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {nums: [1, 2, 3, 4, 5]};
  }

  remove(num: number): void {
    this.setState({
      nums: this.state.nums.filter((n: number) => n !== num)
    })
  }

  render() {
    let nums = this.state.nums.map((n: number, index: number) => {
      return <BetterNumberItem value={n} remove={() => this.remove(n)} key={uuidv4()}/>
    });

    return (
      <div style={{marginTop: '1rem'}}>{nums}</div>
    );
  }
}

export default NumberList;