import {Component} from "react";
import axios from "axios";
import './ZenQuote.css';

class ZenQuote extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {quote: '', isLoading: true};
  }

  componentDidMount() {
    axios.get("https://api.github.com/zen")
      .then(resp => {
        setTimeout(()=>{
          this.setState({quote: resp.data, isLoading: false});
        }, 3000);
      })
      .catch(err => {
        console.error(err);
        this.setState({isLoading: false});
      });
  }

  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<any>, snapshot?: any) {
    console.log('componentDidUpdate');
  }

  render() {
    return (
      <div>
        {this.state.isLoading ? <div className="nb-spinner"></div> :
          <div>Quote of the day: <q>{this.state.quote}</q></div>
        }
      </div>
    );
  }
}

export default ZenQuote;