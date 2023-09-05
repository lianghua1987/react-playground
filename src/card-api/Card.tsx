import './Card.css';
import {useEffect, useState} from "react";

function Card(props: any) {
  const [transform, setTransform] = useState<any>();

  useEffect(()=>{
    const angle = Math.random() * 90 - 45;
    const xPos = Math.random() * 40 - 20;
    const yPos = Math.random() * 40 - 20;
    setTransform(`translate(${xPos}px, ${yPos}px) rotate(${angle}deg)`)
  }, []);

  return (
    <img style={{transform}} className="Card" src={props.image} alt={props.name}/>
  );
}

export default Card;