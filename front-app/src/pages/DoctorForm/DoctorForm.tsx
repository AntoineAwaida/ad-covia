import React from "react";
import styled from "styled-components";
import { TextField, Button } from "@material-ui/core";
import { useDoctorForm } from "./useDoctorForm";
import { AnswerButton } from "../../components/AnswerButton";
import SendIcon from "@material-ui/icons/Send";

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  margin: 50px;
  border: 2px solid black;
  border-radius: 10px;
`;

const UpperText = styled.h3`
  text-align: center;
  border-bottom: 2px solid black;
`;

const BottomContentContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
`;

const HashText = styled.p`
  text-align: center;
`;

const AnswersContainer = styled.div`
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

const TextFieldsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

const ResultFieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
`;

export const DoctorForm = () => {
  const {
    formik,
    firstName,
    lastName,
    age,
    setFirstName,
    setLastName,
    setAge,
  } = useDoctorForm();

  return (
    <Container>
      <UpperText>NE PARTAGEZ CE LIEN SOUS AUCUN PRETEXTE</UpperText>
      <BottomContentContainer>
        <span style={{ textAlign: "center" }}>
          <h3>
            Remplissez ci-dessous le prénom, le nom et l'âge du patient, et le
            résultat du test
          </h3>
          <p>
            Les données ci-dessous sont anonymisées avant d'arriver sur notre
            serveur!
          </p>
        </span>
        <AnswersContainer>
          <TextFieldsContainer>
            <TextField
              size="medium"
              variant="filled"
              label={"Prénom"}
              value={firstName}
              onChange={(event) => setFirstName(event.target.value)}
            />
            <TextField
              size="medium"
              variant="filled"
              label={"Nom"}
              value={lastName}
              onChange={(event) => setLastName(event.target.value)}
            />
            <TextField
              size="medium"
              variant="filled"
              label={"Âge"}
              value={age}
              onChange={(event) => setAge(event.target.value)}
            />
          </TextFieldsContainer>
          <ResultFieldContainer>
            <AnswerButton
              text={"POSITIF"}
              value={"yes"}
              checked={formik.values.result === "yes"}
              onClick={() => formik.setFieldValue("result", "yes")}
            />
            <AnswerButton
              text={"NEGATIF"}
              value={"no"}
              checked={formik.values.result === "no"}
              onClick={() => formik.setFieldValue("result", "no")}
            />
          </ResultFieldContainer>
        </AnswersContainer>
        <Button
          variant="contained"
          onClick={() => alert("SENDING DATA TO API")}
        >
          {"Envoyer"}
          <SendIcon style={{ paddingLeft: 10 }} />
        </Button>
        {true && <HashText>{"Hash = " + formik.values.userHashKey}</HashText>}
      </BottomContentContainer>
    </Container>
  );
};
