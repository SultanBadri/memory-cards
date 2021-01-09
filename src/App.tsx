import React, { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./components/Header";
import { Buttons } from "./components/Buttons";
import { Rules } from "./components/Rules";

const App: React.FC = () => {
  const [showRules, setShowRules] = useState(true);
  const [score, setScore] = useState(0);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Buttons score={score} setScore={setScore} setShowRules={setShowRules} />
      <Rules showRules={showRules} />
    </>
  );
};

export default App;
