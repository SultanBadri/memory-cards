import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const RulesDiv = styled.div`
  position: absolute;
  bottom: 30%;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  font-family: "tf2 build";
  font-size: 0.8rem;
  border-radius: 8px;
  padding: 20px;
`;

const Header = styled.h2`
  text-align: center;
  color: #cf6a32;
`;

export const Rules = () => {
  return (
    <Container>
      <RulesDiv>
        <Header>Rules</Header>
        <p>
          You cannot click on the same card twice or you lose. You highest score
          will be saved on the browser in case you ever come back!
        </p>
      </RulesDiv>
    </Container>
  );
};
