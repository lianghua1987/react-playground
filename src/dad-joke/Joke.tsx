import './Joke.css';
import {getColor, getEmoji} from "./util";

function Joke(props: any) {


  return (
    <div className="Joke">
      <div className="Joke-buttons">
        <i className="fas fa-arrow-up" onClick={props.upvote}></i>
        <span className="Joke-votes" style={{borderColor: getColor(props.votes)}}>{props.votes}</span>
        <i className="fas fa-arrow-down" onClick={props.downvote}></i>
      </div>
      <div className="Joke-text">{props.joke}</div>
      <div className="Joke-smiley">
        <i className={getEmoji(props.votes)}></i>
      </div>
    </div>
  );
}


export default Joke;