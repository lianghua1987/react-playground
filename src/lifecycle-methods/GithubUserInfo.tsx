import {Component} from "react";
import axios from "axios";

interface Props {
  username: string
}

class GithubUserInfo extends Component<Props, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    const url = `https://api.github.com/users/${this.props.username}`;
    const {data} = await axios.get(url);
    this.setState({avatarUrl: data.avatar_url, name: data.name});
  }

  render() {
    return (
      <div>
        <h2>Github user: {this.state.name}</h2>
        <img src={this.state.avatarUrl} alt={this.state.name}/>
      </div>

    );
  }
}

export default GithubUserInfo;