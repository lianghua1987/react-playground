import {useEffect, useState} from "react";
import axios from "axios";
import Card from "./Card";
import './Deck.css';

function Deck() {

  const CARD_BASE_URL = "https://www.deckofcardsapi.com/api/deck";
  const [deck, setDeck] = useState<any>(null);
  const [draw, setDraw] = useState<any[]>([]);

  useEffect(() => {
    const shuffle = async () => {
      const {data} = await axios.get(`${CARD_BASE_URL}/new/shuffle`);
      setDeck(data);
    };

    shuffle();
  }, []);

  const getCard = async () => {
    const {data} = await axios.get(`${CARD_BASE_URL}/${deck.deck_id}/draw`);
    if (!data.success) {
      alert('No card remaining!');
    }
    setDraw([...draw, data.cards[0]]);
  }

  return (
    <div className="Deck">
      <h1>CARD DEALER</h1>
      <button onClick={getCard}>Get Card!</button>
      <div className="Deck-cardarea">
        {
          draw.map(c => <Card image={c.image} name={c.code} key={c.code}/>)
        }

      </div>

    </div>
  );
}

export default Deck;