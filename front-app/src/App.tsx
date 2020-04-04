import React from "react";
import styled from "styled-components";
import { isMobileOnly } from "react-device-detect";
import { Landing } from "./pages/Landing";
import { Switch, Route, Link } from "react-router-dom";
import { ADForm } from "./pages/ADForm";

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
        <Title>
          <Link to="/">{"AD COVIA"}</Link>
        </Title>
      </HeaderContainer>
      <Switch>
        <Route path="/form" render={() => <ADForm />} />
        <Route
          path="/"
          render={() =>
            shouldDisplayMobileVersion ? (
              <p>{"Pas disponible sur mobile"}</p>
            ) : (
              <Landing />
            )
          }
        />
      </Switch>
    </Container>
  );
};

export default App;
