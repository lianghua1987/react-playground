import React, {createContext} from "react";
import {useToggle} from "../hooks/useToggle";

// @ts-ignore
export const ThemeContext2 = createContext();

function ThemeProvider2(props: any) {
  const [isDarkMode, toggleTheme] = useToggle(true)

  return (<ThemeContext2.Provider value={{isDarkMode, toggleTheme}}>
      {props.children}
    </ThemeContext2.Provider>
  );
}

export default ThemeProvider2;