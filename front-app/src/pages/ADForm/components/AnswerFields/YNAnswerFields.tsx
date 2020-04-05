import React from "react";
import styled from "styled-components";
import { AnswerButton } from "./AnswerButton";

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

interface Props {
  questionId: string;
  formikValue: string;
  setFieldValue: (field: string, value: string) => void;
}

export const YNAnswerFields = (props: Props) => (
  <Container>
    <AnswerButton
      text={"OUI"}
      value={"yes"}
      id={props.questionId}
      checked={props.formikValue === "yes"}
      onClick={() => props.setFieldValue(props.questionId, "yes")}
    />
    <AnswerButton
      text={"NON"}
      value={"no"}
      id={props.questionId}
      checked={props.formikValue === "no"}
      onClick={() => props.setFieldValue(props.questionId, "no")}
    />
  </Container>
);
