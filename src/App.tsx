import React from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import './App.css';
import Hua from "./random/Hua";
import RollDice from "./roll-dice/RollDice";
import Food from "./random/Food";
import NotFound from "./not-found";
import Hooks from "./hooks/Hooks";
import Navbar from "./context/Navbar";
import ThemeProvider2 from "./context/ThemeContext2";
import Context from "./context/Context";
import PokeGame from "./pokemon/PokeGame";
import BoxList from "./box/BoxList";
import {Random} from "./random/Random";
import Todos from "./todo/Todos";

function App() {
  return (
    <ThemeProvider2 className="App">
      <Navbar/>
      <header className="App-header">
        <nav className="App-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pokegame">Pokemon</NavLink>
          <NavLink to="/box-list">Boxes</NavLink>
          <NavLink to="/todo">Todo</NavLink>
          <NavLink to="/random">Random</NavLink>
          <NavLink to="/context">Context</NavLink>
          <NavLink to="/food">Food</NavLink>
          <NavLink to="/roll-dice">Roll Dice</NavLink>
          <NavLink to="/hooks">Hooks</NavLink>
        </nav>
      </header>
      <div className="App-body">
        <Routes>
          <Route path="/" element={<Hua name="Hua" mood="OBLIVIOUS"/>}/>
          <Route path="/pokegame" element={<PokeGame/>}/>
          <Route path="/box-list" element={<BoxList/>}/>
          <Route path="/todo" element={<Todos/>}/>
          <Route path="/random" element={<Random/>}/>
          <Route path="/context" element={<Context/>}/>
          <Route path="/food" element={<Food/>}/>
          <Route path="/food/:name" element={<Food/>}/>
          <Route path="/roll-dice" element={<RollDice/>}/>
          <Route path="/hooks" element={<Navigate to="/hooks/counter" replace/>}/>
          <Route path="/hooks/:id" element={<Hooks/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </ThemeProvider2>
  );
}

export default App;
