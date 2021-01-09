import React, { useState} from "react";
import { Card } from "../components/Card";
import forceOfNature from "../images/force_of_nature.jpg";
import directHit from "../images/direct_hit.jpg";
import backburner from "../images/backburner.jpg";
import ironBomber from "../images/iron_bomber.png";

interface CardInterface {
  name: string;
  src: string;
  isClicked: boolean;
}

interface SetScore {
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

export const CardContainer = ({ setScore }: SetScore) => {
  const [numOfCards] = useState(3);

  const cards: Array<CardInterface> = [
    {
      name: "Force of Nature",
      src: forceOfNature,
      isClicked: false,
    },
    {
      name: "Direct Hit",
      src: directHit,
      isClicked: false,
    },
    {
      name: "Backburner",
      src: backburner,
      isClicked: false,
    },
    {
      name: "Iron Bomber",
      src: ironBomber,
      isClicked: false,
    },
  ];
  
  return (
    <>
      {cards.slice(0, numOfCards).map((card) => (
        <Card
          name={card.name}
          src={card.src}
          isClicked={card.isClicked}
          key={card.name}
          setScore={setScore}
        />
      ))}
    </>
  );
};
