import React from "react";
import styled from "styled-components";

const ScoreParagraph = styled.p`
  position: absolute;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
  font-size: 1.6rem;
  font-family: "tf2 build";
  color: #cf6a32;
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
      <br />
      <br />
      <ScoreParagraph>
        High Score: <ScoreSpan>{bestScore}</ScoreSpan>
      </ScoreParagraph>
    </>
  );
};
