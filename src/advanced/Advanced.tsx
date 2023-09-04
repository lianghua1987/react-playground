import React from 'react';
import {NavLink, useParams} from "react-router-dom";
import Toggle from "./Toggle";
import './Advanced.css';
import SimpleForm from "./SimpleForm";
import SwMovies from "./SwMovies";
import Reducer from "./Reducer";

function Advanced() {
  const {id} = useParams();
  return (
    <div className="Advanced">
      <nav className="Advanced-nav">
        <NavLink to="/advanced/toggle">Toggle</NavLink>
        <NavLink to="/advanced/sw-movies">Sw Movies</NavLink>
        <NavLink to="/advanced/simple-form">Simple Form</NavLink>
        <NavLink to="/advanced/reducer">Reducer</NavLink>
      </nav>
      <div className="Advanced-content">
        {id === 'toggle' && <Toggle/>}
        {id === 'sw-movies' && <SwMovies/>}
        {id === 'simple-form' && <SimpleForm/>}
        {id === 'reducer' && <Reducer/>}
      </div>
    </div>
  );
}

export default Advanced;