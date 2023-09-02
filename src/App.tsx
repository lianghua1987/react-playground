import React from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import './App.css';
import Hua from "./random/Hua";
import State from "./random/State";
import RollDice from "./roll-dice/RollDice";
import ButtonList from "./random/ButtonList";
import NumberList from "./random/parent-child/NumberList";
import Food from "./random/Food";
import Clock from "./lifecycle-methods/Clock";
import ZenQuote from "./lifecycle-methods/ZenQuote";
import GithubUsers from "./lifecycle-methods/GithubUsers";
import NotFound from "./not-found";
import Hooks from "./hooks/Hooks";
import Navbar from "./context/Navbar";
import ThemeProvider2 from "./context/ThemeContext2";
import Context from "./context/Context";
import PokeGame from "./pokemon/PokeGame";
import BoxList from "./box/BoxList";

function App() {
  return (
    <ThemeProvider2 className="App">
      <Navbar/>
      <header className="App-header">
        <nav className="App-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pokegame">Pokemon</NavLink>
          <NavLink to="/box-list">Boxes</NavLink>
          <NavLink to="/context">Context</NavLink>
          <NavLink to="/food">Food</NavLink>
          <NavLink to="/clock">Clock</NavLink>
          <NavLink to="/zen-quote">Zen Quote</NavLink>
          <NavLink to="/roll-dice">Roll Dice</NavLink>
          <NavLink to="/button-list">Button List</NavLink>
          <NavLink to="/state">State</NavLink>
          <NavLink to="/number-list">Number List</NavLink>
          <NavLink to="/github-user">Github</NavLink>
          <NavLink to="/hooks">Hooks</NavLink>
        </nav>
      </header>
      <div className="App-body">
        <Routes>
          <Route path="/" element={<Hua name="Hua" mood="OBLIVIOUS"/>}/>
          <Route path="/pokegame" element={<PokeGame/>}/>
          <Route path="/box-list" element={<BoxList/>}/>
          <Route path="/context" element={<Context/>}/>
          <Route path="/food" element={<Food/>}/>
          <Route path="/food/:name" element={<Food/>}/>
          <Route path="/clock" element={<Clock/>}/>
          <Route path="/zen-quote" element={<ZenQuote/>}/>
          <Route path="/roll-dice" element={<RollDice/>}/>
          <Route path="/button-list" element={<ButtonList/>}/>
          <Route path="/state" element={<State/>}/>
          <Route path="/number-list" element={<NumberList/>}/>
          <Route path="/github-user" element={<GithubUsers/>}/>
          <Route path="/hooks" element={<Navigate to="/hooks/counter" replace/>}/>
          <Route path="/hooks/:id" element={<Hooks/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </ThemeProvider2>
  );
}

export default App;
