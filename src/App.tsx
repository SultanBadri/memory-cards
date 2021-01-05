import React from "react";
import { Header } from "./components/Header";
import { Buttons } from "./components/Buttons";
import { GlobalStyle } from "./GlobalStyle";
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
      <Div>
        <Buttons />
      </Div>
    </>
  );
};

export default App;
