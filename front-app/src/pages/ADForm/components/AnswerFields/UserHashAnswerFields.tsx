import React from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";
import { useUserHashAnswerFields } from "./useUserHashAnswerFields";

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

const HashText = styled.p`
  text-align: center;
`;

interface Props {
  questionId: string;
  formikValue: string;
  setFieldValue: (field: string, value: string) => void;
}

export const UserHashAnswerFields = (props: Props) => {
  const {
    firstName,
    lastName,
    age,
    setFirstName,
    setLastName,
    setAge,
  } = useUserHashAnswerFields(props.questionId, props.setFieldValue);

  return (
    <Container>
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
      <HashText>{"Hash = " + props.formikValue}</HashText>
    </Container>
  );
};
