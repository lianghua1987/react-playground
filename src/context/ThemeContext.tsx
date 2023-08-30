import React, {Component, createContext} from "react";

// @ts-ignore
export const ThemeContext = createContext();

class ThemeProvider extends Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {isDarkMode: true};
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState({isDarkMode: !this.state.isDarkMode});
  }

  render() {
    return <ThemeContext.Provider value={{...this.state, toggleTheme: this.toggleTheme}}>
      {this.props.children}
    </ThemeContext.Provider>
  }
}

export default ThemeProvider;