import React, { useState, useEffect } from "react";
import { Card } from "../components/Card";
import forceOfNature from "../images/force_of_nature.jpg";
import directHit from "../images/direct_hit.jpg";
import backburner from "../images/backburner.jpg";
import ironBomber from "../images/iron_bomber.png";

interface CardInterface {
  name: string;
  src: string;
}

interface ScoreProps {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

export const CardContainer: React.FC<ScoreProps> = ({ score, setScore }) => {
  const [isClicked, setIsClicked] = useState([] as any);
  const [numOfCards] = useState(3);

  const cards: Array<CardInterface> = [
    {
      name: "Force of Nature",
      src: forceOfNature,
    },
    {
      name: "Direct Hit",
      src: directHit,
    },
    {
      name: "Backburner",
      src: backburner,
    },
    {
      name: "Iron Bomber",
      src: ironBomber,
    },
  ];

  const [memoryCards, setNewMemoryCards] = useState(cards);

  const shuffleCards = (cards: CardInterface[]) => {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
  };

  useEffect(() => {
    const newCards = [...memoryCards];
    shuffleCards(newCards);
    setNewMemoryCards(newCards);
  }, [score]);

  return (
    <>
      {memoryCards.slice(0, numOfCards).map((card) => (
        <Card
          name={card.name}
          src={card.src}
          key={card.name}
          setScore={setScore}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
        />
      ))}
    </>
  );
};
