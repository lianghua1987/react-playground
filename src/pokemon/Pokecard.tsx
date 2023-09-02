import {Component} from "react";
import './Pokemon.css';
import {Pokemon} from "./Pokemon";

const POKE_ENDPOINT = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (num: number) => num < 999 ? `00${num}`.slice(-3) : num;

class Pokecard extends Component<Pokemon, any> {

  render() {
    // endpoint takes 003 instead of 3 as id
    let imgSrc = `${POKE_API}${padToThree(this.props.id)}.png`;
    return (
      <div className="Pokecard">
        <h1 className="Pokecard-title">{this.props.name}</h1>
        <div className="Pokecard-image">
          <img src={imgSrc} alt={this.props.name}/>
        </div>
        <div>Type: {this.props.type}</div>
        <div>Exp: {this.props.base_experience}</div>
      </div>
    );
  }
}


export default Pokecard;