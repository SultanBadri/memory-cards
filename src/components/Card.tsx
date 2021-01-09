import React from "react";
import styled from "styled-components";
import { Modal } from "./Modal";

const CardDiv = styled.div`
  margin: 50px;
  padding: 20px;
  cursor: pointer;
  transition: 0.3s ease;
  border 2px solid transparent;
  border-radius: 4px;
  &:hover {
    border 2px solid #cf6a32;
  }
`;

const H3 = styled.p`
  font-family: "tf2 build";
  font-weight: 100;
  text-align: center;
  font-size: 1.2rem;
  color: white;
`;

interface CardProps {
  name: string;
  src: string;
  setScore: React.Dispatch<React.SetStateAction<number>>;
  isClicked: any;
  setIsClicked: React.Dispatch<any>;
}

export const Card: React.FC<CardProps> = ({
  name,
  src,
  setScore,
  isClicked,
  setIsClicked,
}) => {
  const handleGameLogic = () => {
    if (!isClicked.includes(name)) {
      setScore((prev: any) => prev + 1);
      setIsClicked((prev: any) => [...prev, name]);
    } else {
      Modal();
      setScore(0);
      setIsClicked([]);
    }
  };

  return (
    <>
      <CardDiv onClick={handleGameLogic}>
        <H3>{name}</H3>
        <img src={src} alt={name} width="200px" height="125px" />
      </CardDiv>
    </>
  );
};
