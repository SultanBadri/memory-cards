import React from "react";
import styled from "styled-components";

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

interface MyProps {
  name: string;
  src: string;
  setScore: Function;
}

export const Card = ({ name, src, setScore }: MyProps) => {
  const handleClick = () => {
    setScore((prev: any) => prev + 1);
  };

  return (
    <>
      <CardDiv onClick={handleClick}>
        <H3>{name}</H3>
        <img src={src} alt={name} width="200px" height="125px" />
      </CardDiv>
    </>
  );
};
