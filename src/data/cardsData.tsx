import React from "react";
import { Card } from "../components/Card";
import forceOfNature from "../images/force_of_nature.jpg";
import directHit from "../images/direct_hit.jpg";
import backburner from "../images/backburner.jpg";

interface CardInterface {
  name: string;
  src: string;
}

interface MyProp {
  setScore: Function;
}

export const CardContainer = ({ setScore }: MyProp) => {
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
  ];

  return (
    <>
      {cards.map((card) => (
        <Card
          name={card.name}
          src={card.src}
          key={card.name}
          setScore={setScore}
        />
      ))}
    </>
  );
};
