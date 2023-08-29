import NumberItem from "./NumberItem";

interface Props {
  value: number
  remove: any
}

class BetterNumberItem extends NumberItem {

  constructor(props: Props) {
    super(props);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handleRemove() {
    this.props.remove(this.props.value);
  }

  render() {
    return super.render();
  }
}

export default BetterNumberItem;