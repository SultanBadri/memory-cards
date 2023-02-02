import React, { useState } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Header } from "./components/Header";
import { Buttons } from "./components/Buttons";
import { Rules } from "./components/Rules";

import backgroundImage from "./images/gold_rush.jpg";

const App: React.FC = () => {
  const [showRules, setShowRules] = useState(true);
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(
    localStorage.getItem("bestScore") || 0
  );

  return (
    <div
      style={{
        overflow: "hidden",
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <GlobalStyle />
      <Header />
      <Buttons
        score={score}
        setScore={setScore}
        bestScore={bestScore}
        setBestScore={setBestScore}
        setShowRules={setShowRules}
      />
      <Rules showRules={showRules} />
    </div>
  );
};

export default App;
