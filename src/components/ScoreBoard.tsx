import React from "react";
import styled from "styled-components";

const ScoreDiv = styled.div`
  margin: 1rem 0;
  text-align: center;
  font-size: 1.6rem;
  font-family: "tf2 build";
  color: #cf6a32;
  @media (max-width: 420px) {
    font-size: 1rem;
    margin: 0.5rem 0;
  }
`;

const ScoreSpan = styled.span`
  color: white;
`;

interface ScoresProp {
  score: number;
  bestScore: React.ReactText;
}

export const ScoreBoard: React.FC<ScoresProp> = ({ score, bestScore }) => {
  return (
    <>
      <ScoreDiv>
        Score: <ScoreSpan>{score}</ScoreSpan>
      </ScoreDiv>
      <ScoreDiv>
        High Score: <ScoreSpan>{bestScore}</ScoreSpan>
      </ScoreDiv>
    </>
  );
};
