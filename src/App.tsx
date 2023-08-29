import React from 'react';
import {NavLink, Route, Routes} from 'react-router-dom';
import './App.css';
import Hua from "./random/Hua";
import State from "./State";
import RollDice from "./roll-dice/RollDice";
import ButtonList from "./random/ButtonList";
import NumberList from "./random/parent-child/NumberList";
import Food from "./random/Food";
import Clock from "./lifecycle-methods/Clock";
import ZenQuote from "./lifecycle-methods/ZenQuote";
import GithubUsers from "./lifecycle-methods/GithubUsers";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <nav className="App-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/food">Food</NavLink>
          <NavLink to="/clock">Clock</NavLink>
          <NavLink to="/zen-quote">Zen Quote</NavLink>
          <NavLink to="/roll-dice">Roll Dice</NavLink>
          <NavLink to="/button-list">Button List</NavLink>
          <NavLink to="/state">State</NavLink>
          <NavLink to="/number-list">Number List</NavLink>
          <NavLink to="/github-user">Github</NavLink>
        </nav>
        <Routes>
          <Route path="/" element={<Hua name="Hua" mood="OBLIVIOUS"/>}/>
          <Route path="/food" element={<Food/>}/>
          <Route path="/clock" element={<Clock/>}/>
          <Route path="/zen-quote" element={<ZenQuote/>}/>
          <Route path="/roll-dice" element={<RollDice/>}/>
          <Route path="/button-list" element={<ButtonList/>}/>
          <Route path="/state" element={<State/>}/>
          <Route path="/number-list" element={<NumberList/>}/>
          <Route path="/github-user" element={<GithubUsers/>}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
