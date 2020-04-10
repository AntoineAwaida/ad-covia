import React from "react";
import styled from "styled-components";
import { isMobileOnly } from "react-device-detect";
import { Landing } from "./pages/Landing";
import { Switch, Route, Link } from "react-router-dom";
import { ADForm } from "./pages/ADForm";
import { DoctorForm } from "./pages/DoctorForm";

const Container = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: #fad39040;
`;

const HeaderContainer = styled.header`
  align-items: center;
  justify-content: center;
  background-color: #1e3799;
`;

const Title = styled.h1`
  text-align: center;
`;

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`;

const FooterContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
`;

const App = () => {
  const shouldDisplayMobileVersion = isMobileOnly;

  return (
    <Container>
      <HeaderContainer>
        <Title>
          <StyledLink to="/">{"AD COVIA"}</StyledLink>
        </Title>
      </HeaderContainer>
      <Switch>
        <Route path="/form" render={() => <ADForm />} />
        <Route path="/form_doctor" render={() => <DoctorForm />} />
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
      <FooterContainer>
        <h2>Vie Privée | Projet CovIA | A propos | Nos partenaires</h2>
      </FooterContainer>
    </Container>
  );
};

export default App;
