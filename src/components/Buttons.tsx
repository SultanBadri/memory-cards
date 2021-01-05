import React from "react";
import styled from "styled-components";

const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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
  return (
    <Div>
      <Button>Let's play!</Button>
    </Div>
  );
};
