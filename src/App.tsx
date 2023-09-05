import React from 'react';
import {Navigate, NavLink, Route, Routes} from 'react-router-dom';
import './App.css';
import Hua from "./random/Hua";
import RollDice from "./roll-dice/RollDice";
import NotFound from "./not-found";
import Navbar from "./context/Navbar";
import ThemeProvider2 from "./context/ThemeContext2";
import Context from "./context/Context";
import PokeGame from "./pokemon/PokeGame";
import BoxList from "./box/BoxList";
import {Random} from "./random/Random";
import Todos from "./todo/Todos";
import TodosProvider from "./todo/context/todos.context";
import Advanced from "./advanced/Advanced";
import Hangman from "./hangman/Hangman";
import Deck from "./card-api/Deck";

function App() {
  return (
    <ThemeProvider2 className="App">
      <Navbar/>
      <header className="App-header">
        <nav className="App-nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/pokegame">Pokemon</NavLink>
          <NavLink to="/hangman">Hangman</NavLink>
          <NavLink to="/deck">Deck</NavLink>
          <NavLink to="/box-list">Boxes</NavLink>
          <NavLink to="/todo">Todos</NavLink>
          <NavLink to="/random">Random</NavLink>
          <NavLink to="/context">Context</NavLink>
          <NavLink to="/roll-dice">Roll Dice</NavLink>
          <NavLink to="/advanced">Advanced</NavLink>
        </nav>
      </header>
      <div className="App-body">
        <Routes>
          <Route path="/" element={<Hua name="Hua" mood="OBLIVIOUS"/>}/>
          <Route path="/pokegame" element={<PokeGame/>}/>
          <Route path="/hangman" element={<Hangman/>}/>
          <Route path="/deck" element={<Deck/>}/>
          <Route path="/box-list" element={<BoxList/>}/>
          <Route path="/todo" element={<TodosProvider><Todos/></TodosProvider>}/>
          <Route path="/random"  element={<Navigate to="/random/clock" replace/>}/>
          <Route path="/random/:id" element={<Random/>}/>
          <Route path="/context" element={<Context/>}/>
          <Route path="/roll-dice" element={<RollDice/>}/>
          <Route path="/advanced" element={<Navigate to="/advanced/counter" replace/>}/>
          <Route path="/advanced/:id" element={<Advanced/>}/>
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </div>
    </ThemeProvider2>
  );
}

export default App;
