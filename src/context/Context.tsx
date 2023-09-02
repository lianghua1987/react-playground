import {ThemeContext2} from "./ThemeContext2";
import {Component} from "react";

export default class Context extends Component<any, any> {
  static contextType = ThemeContext2;

  render() {
    // @ts-ignore
    const {isDarkMode} = this.context;
    return (
      <div>
        <div>Dark mode is {String(isDarkMode)} from static ThemeContext</div>
        <ThemeContext2.Consumer>
          {(value: any) => (<div>Dark mode is {String(value.isDarkMode)} from ThemeContext2.Consumer</div>)}
        </ThemeContext2.Consumer>
      </div>

    );
  }
}