import {useEffect, useState} from "react";
import axios from "axios";
import './Jokes.css';
import sidebarImg from './sidebar-emoji.svg';
function Jokes() {

  const maxJokes = 10;
  const [jokes, setJokes] = useState<string[]>([]);

  useEffect(() => {
    const getJokes = async () => {
      const jokes = [];
      while (jokes.length < maxJokes) {
        const {data} = await axios.get("https://icanhazdadjoke.com/", {headers: {Accept: "application/json"}})
        jokes.push(data.joke);
      }
      setJokes(jokes);
    };
    getJokes();
  }, [])
  return (
    <div className="Jokes">
      <div className="Jokes-container">
        <div className = "Jokes-sidebar">
          <h1 className="Jokes-title"><span>Dad</span> Jokes</h1>
          <img src={sidebarImg} alt="sidebar-emoji"/>
          <button className="Jokes-new">New Jokes</button>
        </div>
        <div className="Jokes-content">
          {
            jokes.map((j: string) => <div>{j}</div>)
          }
        </div>
      </div>
    </div>
  );
}

export default Jokes;