import React, { useState } from "react";
import styled from "styled-components";
import { Modal } from "./Modal";

const CardDiv = styled.div`
  margin: 30px;
  padding: 20px;
  cursor: pointer;
  transition: 0.3s ease;
  border 2px solid transparent;
  border-radius: 8px;
  &:hover {
    border 2px solid #cf6a32;
  }
  @media (max-width: 768px) {
    margin: 10px;
    padding: 10px;
  }
`;

const H3 = styled.p`
  font-family: "tf2 build";
  font-weight: 100;
  text-align: center;
  font-size: 1.2rem;
  color: white;
  @media (max-width: 420px) {
    font-size: 1rem;
  }
  @media (max-width: 360px) {
    font-size: 0.8rem;
  }
`;

const Img = styled.img`
  width: 200px;
  height: 125px;
  @media (max-width: 420px) {
    width: 150px;
    height: 100px;
  }
  @media (max-width: 420px) {
    width: 125px;
    height: 75px;
  }
  @media (max-width: 360px) {
    width: 75px;
    height: 50px;
  }
`;

interface CardProps {
  name: string;
  src: string;
  score: number;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  bestScore: number | string;
  setBestScore: React.Dispatch<React.SetStateAction<React.ReactText>>;
  isClicked: any;
  setIsClicked: React.Dispatch<any>;
}

export const Card: React.FC<CardProps> = ({
  name,
  src,
  score,
  setScore,
  bestScore,
  setBestScore,
  isClicked,
  setIsClicked,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleGameLogic = () => {
    if (!isClicked.includes(name)) {
      let newScore = score + 1;
      setScore(newScore);
      if (newScore > bestScore) {
        setBestScore(newScore);
        localStorage.setItem("bestScore", newScore.toString());
      }
      setIsClicked((prev: any) => [...prev, name]);
    } else {
      setIsModalOpen(true);
    }
  };

  return (
    <>
      <CardDiv onClick={handleGameLogic}>
        <H3>{name}</H3>
        <Img src={src} alt={name} />
      </CardDiv>

      {isModalOpen ? (
        <Modal
          score={score}
          setScore={setScore}
          setIsClicked={setIsClicked}
          setIsModalOpen={setIsModalOpen}
        />
      ) : null}
    </>
  );
};
