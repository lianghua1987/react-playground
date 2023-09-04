import Clock from "../lifecycle-methods/Clock";
import React from "react";
import ZenQuote from "../lifecycle-methods/ZenQuote";
import ButtonList from "./ButtonList";
import State from "./State";
import GithubUsers from "../lifecycle-methods/GithubUsers";
import NumberList from "./parent-child/NumberList";
import {NavLink, useParams} from "react-router-dom";
import Counter from "./Counter";
import Clicker from "./Clicker";

export function Random() {
  const {id} = useParams();
  return (
    <div className="Random">
      <nav className="Random-nav">
        <NavLink to="/random/clock">Clock</NavLink>
        <NavLink to="/random/counter">Counter</NavLink>
        <NavLink to="/random/clicker">Clicker</NavLink>
        <NavLink to="/random/zen-quote">Zen Quote</NavLink>
        <NavLink to="/random/state">State</NavLink>
        <NavLink to="/random/numbers">Numbers</NavLink>
        <NavLink to="/random/github-user">GithubUsers</NavLink>
        <NavLink to="/random/buttons">Buttons</NavLink>
      </nav>
      <div className="Random-content">
        {id === 'clock' && <Clock/>}
        {id === 'counter' && <Counter/>}
        {id === 'clicker' && <Clicker/>}
        {id === 'zen-quote' && <ZenQuote/>}
        {id === 'state' && <State/>}
        {id === 'numbers' && <NumberList/>}
        {id === 'github-user' && <GithubUsers/>}
        {id === 'buttons' && <ButtonList/>}
      </div>
    </div>
  );
}