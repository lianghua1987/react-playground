import {Component} from "react";
import GithubUserInfo from "./GithubUserInfo";

class GithubUsers extends Component<any, any>{
  constructor(props: any) {
    super(props);
  }
  render() {
    return (
        <GithubUserInfo username="lianghua1987"/>
    );
  }
}

export default GithubUsers;