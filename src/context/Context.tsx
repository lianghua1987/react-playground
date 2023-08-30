import {ThemeContext} from "./ThemeContext";
import {Component} from "react";

export default class Context extends Component<any, any> {
  static contextType = ThemeContext;

  render() {
    // @ts-ignore
    const {isDarkMode} = this.context;
    return (
      <div>
        <div>Dark mode is {String(isDarkMode)} from static ThemeContext</div>
        <ThemeContext.Consumer>
          {(value: any) => (<div>Dark mode is {String(value.isDarkMode)} from ThemeContext.Consumer</div>)}
        </ThemeContext.Consumer>
      </div>

    );
  }
}