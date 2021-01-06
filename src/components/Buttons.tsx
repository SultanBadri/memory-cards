import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { CardContainer } from "../data/cardsData";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: 1024px) {
    display: flex;
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
  &:hover {
    background: #cf6a32;
    color: white;
  }
`;

export const Buttons = () => {
  const [showGame, setShowGame] = useState(false);

  const handleClick = () => {
    setShowGame(true);
  };

  return (
    <Div>
      <Button
        style={{ display: showGame ? "none" : "block" }}
        onClick={handleClick}
      >
        Let's play!
      </Button>
      {showGame ? <CardContainer /> : null}
    </Div>
  );
};
