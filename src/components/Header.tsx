import React from "react";
import styled from "styled-components";

const Div = styled.div`
  text-align: center;
  background: #cf6a32;
  padding: 0.5rem;
`;

const H1 = styled.h1`
  color: white;
  font-family: "tf2 build";
  @media (max-width: 420px) {
    font-size: 28px;
  }
`;

export const Header = () => {
  return (
    <Div>
      <H1>Tf2 Memory Cards</H1>
    </Div>
  );
};
