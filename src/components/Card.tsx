import React from "react";
import styled from "styled-components";

const CardDiv = styled.div`
  margin: 50px;
  cursor: pointer;
  transition: 0.3s ease;
  &:hover {
    transform: scale(1.03);
  }
`;

export const Card = (props: any) => {
  const {
    card: { name, src },
  } = props;

  return (
    <CardDiv>
      <img src={src} alt={name} width="250px" />
    </CardDiv>
  );
};
