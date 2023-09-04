import React from 'react';
import {NavLink, useParams} from "react-router-dom";
import Counter from "./Counter";
import Toggle from "./Toggle";
import './Hooks.css';
import SimpleForm from "./SimpleForm";
import Clicker from "./Clicker";
import SwMovies from "./SwMovies";
import Reducer from "./Reducer";

function Hooks() {
  const {id} = useParams();
  return (
    <div className="Hooks">
      <nav className="Hooks-nav">
        <NavLink to="/advanced/counter">Counter</NavLink>
        <NavLink to="/advanced/toggle">Toggle</NavLink>
        <NavLink to="/advanced/clicker">Clicker</NavLink>
        <NavLink to="/advanced/sw-movies">Sw Movies</NavLink>
        <NavLink to="/advanced/simple-form">Simple Form</NavLink>
        <NavLink to="/advanced/reducer">Reducer</NavLink>
      </nav>
      {id === 'counter' && <Counter/>}
      {id === 'toggle' && <Toggle/>}
      {id === 'clicker' && <Clicker/>}
      {id === 'sw-movies' && <SwMovies/>}
      {id === 'simple-form' && <SimpleForm/>}
      {id === 'reducer' && <Reducer/>}
    </div>
  );
}

export default Hooks;