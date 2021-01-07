import React, { useState } from "react";
import styled from "styled-components";
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
`;

const Button = styled.button`
  cursor: pointer;
  padding: 8px 32px;
  border: none;
  outline: none;
  border-radius: 25px;
  background: #aaaaaa;
  transition: 0.3s ease;
  font-family: "tf2 build";
  &:hover {
    background: #cf6a32;
    color: white;
  }
`;

export const Buttons = () => {
  const [showGame, setShowGame] = useState(false);
  const [score, setScore] = useState(0);

  const handleClick = () => {
    setShowGame(true);
  };

  return (
    <>
      {showGame ? <ScoreBoard score={score} /> : null}
      <Div>
        <Button
          style={{ display: showGame ? "none" : "block" }}
          onClick={handleClick}
        >
          Let's play!
        </Button>
        {showGame ? <CardContainer setScore={setScore} /> : null}
      </Div>
    </>
  );
};
