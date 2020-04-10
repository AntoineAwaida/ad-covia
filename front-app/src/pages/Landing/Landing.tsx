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
  margin-top: 50px;
  margin-bottom: 50px;
  background-color: white;
`;

const WelcomeText = styled.h3`
  text-align: center;
`;

const BottomContentContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
`;

const generateBottomContent = (apiStatus: ApiStatus) => {
  switch (apiStatus) {
    case "ONLINE":
      return (
        <>
          <Link to="/form">
            <Button variant="contained" color="primary">
              Formulaire Patient
            </Button>
          </Link>
          <Link to="/form_doctor">
            <Button variant="contained" color="primary">
              Formulaire Médecin
            </Button>
          </Link>
        </>
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
