import React, {useContext, useState} from "react";
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Switch from '@mui/material/Switch';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {styled} from '@mui/system';
import {ThemeContext2} from "./ThemeContext2";
import './Navbar.css';

function Navbar(props: any) {
  const classes = props;

  // @ts-ignore
  const {isDarkMode, toggleTheme} = useContext(ThemeContext2);
  const [darkMode, setDarkMode] = useState(isDarkMode);

  const changeHandler = () => {
    setDarkMode(!darkMode);
    toggleTheme();
  }

  return (

    <div className={classes.root}>
      <AppBar position='static' color='primary'>
        <ToolBar>
          <IconButton className={classes.menuButton}>
            <span>🍔</span>
          </IconButton>
          <Typography variant="h6" className={classes.title} sx={{flexGrow: 1}}>
            Javascript Playground by Hua
          </Typography>
          <div>
            Dark Mode <Switch checked={darkMode} onChange={changeHandler}/>
          </div>
        </ToolBar>
      </AppBar>
    </div>
  );
}

export default styled(Navbar)(({theme}) => ({
  root: {
    width: "12%",
    marginBottom: "500px"
  },
  menuButton: {
    padding: "100px"
  }
}));


