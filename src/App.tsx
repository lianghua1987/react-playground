import React from 'react';
import './App.css';
import fruits, {random} from './random/food';
import Hua from "./random/Hua";
import State from "./State";
import RollDice from "./roll-dice/RollDice";

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <Hua name="Hua"/>
        <Hua name="Hua" mood="angry"/>
      </header>
      <RollDice/>

      {fruits.join(" ")}
      <br/>
      {random.join(" ")}
      <State/>
    </div>
  );
}

export default App;
