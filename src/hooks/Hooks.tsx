import React from 'react';
import {NavLink, useParams} from "react-router-dom";
import Counter from "./Counter";
import Toggle from "./Toggle";
import './Hooks.css';
import SimpleForm from "./SimpleForm";
import Clicker from "./Clicker";
import SwMovies from "./SwMovies";

function Hooks() {
  const {id} = useParams();
  return (
    <div className="Hooks">
      <nav className="Hooks-nav">
        <NavLink to="/hooks/counter">Counter</NavLink>
        <NavLink to="/hooks/toggle">Toggle</NavLink>
        <NavLink to="/hooks/clicker">Clicker</NavLink>
        <NavLink to="/hooks/sw-movies">Sw Movies</NavLink>
        <NavLink to="/hooks/simple-form">Simple Form</NavLink>
      </nav>
      {id === 'counter' && <Counter/>}
      {id === 'toggle' && <Toggle/>}
      {id === 'clicker' && <Clicker/>}
      {id === 'sw-movies' && <SwMovies/>}
      {id === 'simple-form' && <SimpleForm/>}
    </div>
  );
}

export default Hooks;