import React, { useState, useEffect } from "react";
import { Card } from "../components/Card";
import forceOfNature from "../images/force_of_nature.jpg";
import capper from "../images/capper.png";
import sandman from "../images/sandman.png";
import directHit from "../images/direct_hit.jpg";
import gunboats from "../images/gunboats.png";
import escapePlan from "../images/escape_plan.png";
import backburner from "../images/backburner.jpg";
import flareGun from "../images/flare_gun.png";
import powerjack from "../images/powerjack.jpg";
import ironBomber from "../images/iron_bomber.png";
import stickyJumper from "../images/sticky_jumper.png";
import eyelander from "../images/eyelander.jpg";
import tomislav from "../images/tomislav.png";
import sandvich from "../images/sandvich.png";
import warriorsSpirit from "../images/warrior's_spirit.png";
import rescueRanger from "../images/rescue_ranger.png";
import shortCurcuit from "../images/short_circuit.png";
import jag from "../images/jag.png";
import crusaderCrossbow from "../images/crusader's_crossbow.png";
import kritzkrieg from "../images/kritzkrieg.png";
import ubersaw from "../images/ubersaw.png";
import huntsman from "../images/huntsman.png";
import razerback from "../images/razerback.png";
import shashasha from "../images/shashasha.png";
import ambassador from "../images/ambassador.png";
import kunai from "../images/kunai.png";
import deadRinger from "../images/dead_ringer.png";
import fryingPan from "../images/frying_pan.png";
import goldenFryingPan from "../images/golden_frying_pan.jpg";
import sentry from "../images/sentry.png";
import wildScout from "../images/wild_scout.png";

interface CardInterface {
  name: string;
  src: string;
}

interface ScoreProps {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  bestScore: React.ReactText;
  setBestScore: React.Dispatch<React.SetStateAction<React.ReactText>>;
}

export const CardContainer: React.FC<ScoreProps> = ({
  score,
  setScore,
  bestScore,
  setBestScore,
}) => {
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
    {
      name: "Tomislav",
      src: tomislav,
    },
    {
      name: "Kritzkrieg",
      src: kritzkrieg,
    },
    {
      name: "Rescue Ranger",
      src: rescueRanger,
    },
    {
      name: "Huntsman",
      src: huntsman,
    },
    {
      name: "Kunai",
      src: kunai,
    },
    {
      name: "Sandman",
      src: sandman,
    },
    {
      name: "Escape Plan",
      src: escapePlan,
    },
    {
      name: "Powerjack",
      src: powerjack,
    },
    {
      name: "Eyelander",
      src: eyelander,
    },
    {
      name: "Warrior's Spirit",
      src: warriorsSpirit,
    },
    {
      name: "Jag",
      src: jag,
    },
    {
      name: "Ubersaw",
      src: ubersaw,
    },
    {
      name: "Shashasha",
      src: shashasha,
    },
    {
      name: "Ambassador",
      src: ambassador,
    },
    {
      name: "Capper",
      src: capper,
    },
    {
      name: "Dead Ringer",
      src: deadRinger,
    },
    {
      name: "Razerback",
      src: razerback,
    },
    {
      name: "Crusader's Crossbow",
      src: crusaderCrossbow,
    },
    {
      name: "Short Curcuit",
      src: shortCurcuit,
    },
    {
      name: "Sandvich",
      src: sandvich,
    },
    {
      name: "Sticky Jumper",
      src: stickyJumper,
    },
    {
      name: "Flare Gun",
      src: flareGun,
    },
    {
      name: "Gunboats",
      src: gunboats,
    },
    {
      name: "Frying Pan",
      src: fryingPan,
    },
    {
      name: "Golden Frying Pan",
      src: goldenFryingPan,
    },
    {
      name: "Sentry",
      src: sentry,
    },
    {
      name: "A wild Scout",
      src: wildScout,
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
          score={score}
          setScore={setScore}
          bestScore={bestScore}
          setBestScore={setBestScore}
          isClicked={isClicked}
          setIsClicked={setIsClicked}
        />
      ))}
    </>
  );
};
