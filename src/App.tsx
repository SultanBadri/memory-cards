import React from "react";
import { Header } from "./components/Header";
import { Buttons } from "./components/Buttons";
import { GlobalStyle } from "./GlobalStyle";
import { ScoreBoard } from "./components/ScoreBoard";
import styled from "styled-components";

const Div = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Buttons />
    </>
  );
};

export default App;
