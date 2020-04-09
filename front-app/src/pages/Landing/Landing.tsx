import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import { useLanding, ApiStatus } from "./useLanding";
import { CircularProgress } from "@material-ui/core";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  border: 2px solid black;
  border-radius: 10px;
`;

const WelcomeText = styled.h3`
  text-align: center;
`;

const BottomContentContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

const generateBottomContent = (apiStatus: ApiStatus) => {
  switch (apiStatus) {
    case "ONLINE":
      return (
        <Link to="/form">
          <Button variant="contained" color="primary">
            Aller au formulaire
          </Button>
        </Link>
      );

    case "PENDING":
      return <CircularProgress />;

    case "OFFLINE":
      return "Notre outil est actuellement innaccessible, nous vous prions de revenir plus tard";
  }
};

export const Landing = () => {
  const { apiStatus, questions } = useLanding();

  return (
    <Container>
      <WelcomeText>Site en construction</WelcomeText>
      <WelcomeText>
        {"API Status : " +
          apiStatus +
          " | Questions chargées : " +
          questions.length}
      </WelcomeText>
      <BottomContentContainer>
        {generateBottomContent(apiStatus)}
      </BottomContentContainer>
    </Container>
  );
};
