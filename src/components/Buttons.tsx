import React, { useState } from "react";
import styled from "styled-components";
import { CgGames } from "react-icons/cg";
import { CardContainer } from "../data/cardsData";
import { ScoreBoard } from "./ScoreBoard";

const Div = styled.div`
  display: flex;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 1024px) {
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }
  @media (max-width: 768px) {
    margin-top: 6rem;
  }
  @media (max-width: 420px) {
    margin-top: 3rem;
  }
  @media (max-width: 360px) {
    margin-top: 4rem;
  }
`;

const Button = styled.button`
  cursor: pointer;
  padding: 8px 32px;
  border: none;
  outline: none;
  border-radius: 25px;
  background: #3e4242;
  color: white;
  transition: 0.3s ease;
  font-family: "tf2 build";
  font-size: 1.2rem;
  &:hover {
    background: #cf6a32;
    color: white;
  }
`;

interface RulesAndScoreProp {
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  bestScore: React.ReactText;
  setBestScore: React.Dispatch<React.SetStateAction<React.ReactText>>;
  setShowRules: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Buttons: React.FC<RulesAndScoreProp> = ({
  score,
  setScore,
  bestScore,
  setBestScore,
  setShowRules,
}) => {
  const [showGame, setShowGame] = useState(false);

  const handleClick = () => {
    setShowGame(true);
    setShowRules(false);
  };

  return (
    <>
      {showGame ? <ScoreBoard score={score} bestScore={bestScore} /> : null}
      <Div>
        <Button
          style={{ display: showGame ? "none" : "block" }}
          onClick={handleClick}
        >
          Let's play!{" "}
          <CgGames style={{ verticalAlign: "middle", fontSize: "1.8rem" }} />
        </Button>
        {showGame ? (
          <CardContainer
            score={score}
            setScore={setScore}
            bestScore={bestScore}
            setBestScore={setBestScore}
          />
        ) : null}
      </Div>
    </>
  );
};
