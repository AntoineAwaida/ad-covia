import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  margin: 50px;
  background-color: gray;
  border: 2px solid white;
  border-radius: 20px;
`;

const WelcomeText = styled.h3`
  text-align: center;
`;

const ButtonContainer = styled.div`
  align-items: center;
  justify-content: center;
`;

export const Landing = () => (
  <Container>
    <WelcomeText>Site en construction</WelcomeText>
    <ButtonContainer>{/* Button will go here */}</ButtonContainer>
  </Container>
);
