import {useEffect, useState} from "react";
import axios from "axios";
import './SwMovies.css';

interface Movie {
  title: string
}

export default function SwMovies() {

  const [number, setNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [movie, setMovie] = useState<Movie>({title: ''});

  useEffect(() => {
    async function fetchData() {
      try {
        const {data} = await axios.get(`https://swapi.dev/api/films/${number}/`);
        setMovie(data);
      } finally {
        setIsLoading(false);
      }
    }

    fetchData()
  }, [number]);

  const changeHandler = (e: any) => {
    setIsLoading(true);
    setNumber(e.target.value);
  };

  return (
    <div>
      {isLoading ? <div className="nb-spinner"></div> : <h4>You've selected: {movie.title}</h4>}
      <select onChange={changeHandler}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
      </select>
    </div>
  );
}