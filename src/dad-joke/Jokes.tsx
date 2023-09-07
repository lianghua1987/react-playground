import {useEffect, useState} from "react";
import axios from "axios";
import './Jokes.css';
import sidebarImg from './sidebar-emoji.svg';
import Joke from "./Joke";
import {v4 as uuidv4} from 'uuid';

function Jokes() {

  const maxJokes = 10;
  const [jokes, setJokes] = useState<any[]>(JSON.parse(window.localStorage.getItem("jokes") || "[]"));
  const [loading, setLoading] = useState(true);

  const getJokes = async () => {
    const newJokes = [];
    const currJokes = new Set(jokes.map(j => j.joke));
    while (newJokes.length < maxJokes) {
      const {data} = await axios.get("https://icanhazdadjoke.com/", {headers: {Accept: "application/json"}});
      if (currJokes.size && currJokes.has(data.joke)) continue;
      console.log(`Duplicated joke found: ${data.joke}`);
      newJokes.push({id: uuidv4(), joke: data.joke, votes: 0});
    }
    return newJokes;
  };

  useEffect(() => {
    if (jokes.length == 0){
      getJokes()
        .then(jokes => {
          setJokes(jokes);
          window.localStorage.setItem("jokes", JSON.stringify(jokes));
          setLoading(false);
        }).catch((err) => {
        setLoading(false);
      });
    } else {
      setLoading(false);
    }
  }, []);

  const handleVote = (id: string, delta: number) => {
    const updated = jokes.map((j: any) => {
      return {...j, votes: j.votes + (id === j.id ? delta : 0)}
    });
    setJokes(updated);
    window.localStorage.setItem("jokes", JSON.stringify(updated));
  }

  const handleNewJokes = async () => {
    try {
      setLoading(true);
      const newJokes = await getJokes();
      setJokes(oldJokes => [...newJokes, ...oldJokes]);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="Jokes-spinner">
        <i className="far fa-8x fa-laugh fa-spin"/>
        <h1 className="Jokes-title">Loading...</h1>
      </div>
    );
  }

  const sortedJokes = jokes.sort((j1, j2) => j2.votes - j1.votes);

  return (
    <div className="Jokes">
      <div className="Jokes-container">
        <div className="Jokes-sidebar">
          <h1 className="Jokes-title"><span>Dad</span> Jokes</h1>
          <img src={sidebarImg} alt="sidebar-emoji"/>
          <button className='Jokes-getmore' onClick={handleNewJokes}>
            Fetch Jokes
          </button>
        </div>
        <div className="Jokes-content">
          {
            sortedJokes.map((j: any) => <Joke key={j.id} {...j} upvote={() => handleVote(j.id, 1)}
                                              downvote={() => handleVote(j.id, -1)}/>)
          }
        </div>
      </div>
    </div>
  );
}

export default Jokes;