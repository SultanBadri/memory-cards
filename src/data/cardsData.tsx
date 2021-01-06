import React from "react";
import { Card } from "../components/Card";
import forceOfNature from "../images/force_of_nature.jpg";
import directHit from "../images/direct_hit.jpg";
import backburner from "../images/backburner.jpg";

export const CardContainer = () => {
  interface CardInterface {
    name: string;
    src: string;
  }

  const cards: Array<CardInterface> = [
    {
      name: "Scout",
      src: forceOfNature,
    },
    {
      name: "Soldier",
      src: directHit,
    },
    {
      name: "Pyro",
      src: backburner,
    },
  ];

  return (
    <>
      {cards.map((card) => (
        <Card card={card} key={card.name} />
      ))}
    </>
  );
};
