import React from "react";
import styled from "styled-components";

const ScoreParagraph = styled.p`
  text-align: center;
  font-size: 1.6rem;
  font-family: "tf2 build";
  color: #cf6a32;
  @media (max-width: 420px) {
    font-size: 1rem;
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
      <ScoreParagraph>
        Score: <ScoreSpan>{score}</ScoreSpan>
      </ScoreParagraph>
      <ScoreParagraph>
        High Score: <ScoreSpan>{bestScore}</ScoreSpan>
      </ScoreParagraph>
    </>
  );
};
