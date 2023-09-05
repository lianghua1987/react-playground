import React, {Component, useEffect, useState} from "react";
import {randomWord} from "./words";
import "./Hangman.css";
import img0 from "./img/0.jpg";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";
import {v4 as uuidv4} from 'uuid';

function Hangman() {
  const maxWrong = 6;
  const images = [img0, img1, img2, img3, img4, img5, img6];
  const [state, setState] = useState({nWrong: 0, guessed: new Set(), answer: randomWord()});

  useEffect(() => {
    console.log(state);
  }, [state]);


  const reset = () => {
    setState({
      nWrong: 0,
      guessed: new Set(),
      answer: randomWord()
    });
  }

  const guessedWord = () => {
    return state.answer
      .split("")
      .map(ltr => (state.guessed.has(ltr) ? ltr : "_"));
  }

  const handleGuess = (evt) => {
    let letter = evt.target.value;
    setState(st => ({
      guessed: st.guessed.add(letter),
      nWrong: st.nWrong + (st.answer.includes(letter) ? 0 : 1),
      answer: st.answer
    }));
  }


  const gameOver = state.nWrong >= maxWrong;
  const isWinner = guessedWord().join("") === state.answer;

  return (
    <div className='Hangman'>
      <h3>Hangman</h3>
      <img src={images[state.nWrong]} alt={`${state.nWrong}/${maxWrong} guesses`}/>
      <div className='Hangman-nwrong'>Guessed Wrong: {state.nWrong}</div>
      <div className='Hangman-word'>
        {gameOver ? state.answer : guessedWord() }
      </div>
      <p className='Hangman-btns'>
        {isWinner && 'You Win!'}
        {gameOver && 'You Lose!'}
        {!isWinner && !gameOver && "abcdefghijklmnopqrstuvwxyz".split("").map(letter => (
          <button
            key={uuidv4()}
            value={letter}
            onClick={handleGuess}
            disabled={state.guessed.has(letter)}
          >
            {letter}
          </button>
        ))}
      </p>
      <button id='reset' onClick={reset}>
        Restart?
      </button>
    </div>
  );
}

export default Hangman;
