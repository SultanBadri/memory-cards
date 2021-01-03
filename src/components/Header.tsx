import React from "react";
import styled from "styled-components";

const Div = styled.div`
  text-align: center;
  background: #e84a5f;
  padding: 0.5rem;
`;

const H1 = styled.h1`
  color: white;
`;

export const Header = () => {
  return (
    <Div>
      <H1>Memory Cards</H1>
    </Div>
  );
};
