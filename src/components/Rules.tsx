import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const RulesDiv = styled.div`
  position: absolute;
  bottom: 20%;
  background: rgba(0, 0, 0, 0.6);
  color: white;
  font-family: "tf2 build";
  font-size: 0.8rem;
  border-radius: 8px;
  padding: 20px;
  width: 50%;
  line-height: 1.6;
  text-align: justify;
  @media (max-width: 1024px) {
    width: 70%;
    bottom: 15%;
  }
`;

const Header = styled.h2`
  font-size: 1.4rem;
  text-align: center;
  color: #cf6a32;
`;

interface RulesProp {
  showRules: boolean;
}

export const Rules: React.FC<RulesProp> = ({ showRules }) => {
  const rules = () => {
    if (showRules === true) {
      return (
        <Container>
          <RulesDiv>
            <Header>The Holy Rules</Header>
            <p style={{ fontSize: "1rem" }}>
              Pick a different card each time the deck is shuffled. Make sure
              you don't pick the same card twice, otherwise the game will end.
              Your best score will be saved on the browser in case you ever
              return. 😉
            </p>
          </RulesDiv>
        </Container>
      );
    }
  };

  return <>{rules()}</>;
};
