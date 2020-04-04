import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  background-color: gray;
  border: 2px solid white;
  border-radius: 20px;
`;

const WelcomeText = styled.h3`
  text-align: center;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const Landing = () => (
  <Container>
    <WelcomeText>Site en construction</WelcomeText>
    <ButtonContainer>
      <Link to="/form">
        <Button variant="contained" color="primary">
          Aller au formulaire
        </Button>
      </Link>
    </ButtonContainer>
  </Container>
);
