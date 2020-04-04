import React from "react";
import styled from "styled-components";
import { isMobileOnly } from "react-device-detect";
import { Landing } from "./pages/Landing";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: #282c34;
`;

const HeaderContainer = styled.header`
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  text-align: center;
  color: white;
`;

const App = () => {
  const shouldDisplayMobileVersion = isMobileOnly;

  return (
    <Container>
      <HeaderContainer>
        <Title>{"AD COVIA"}</Title>
      </HeaderContainer>
      {shouldDisplayMobileVersion ? (
        <p>{"Pas disponible sur mobile"}</p>
      ) : (
        <Landing />
      )}
    </Container>
  );
};

export default App;
