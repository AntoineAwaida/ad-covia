import React from "react";
import styled from "styled-components";
import { AnswerButton } from "../../../../components/AnswerButton";

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

interface Props {
  questionId: string;
  formikValue: string;
  setFieldValue: (field: string, value: string) => void;
}

export const YNUAnswerFields = (props: Props) => (
  <Container>
    <AnswerButton
      text={"OUI"}
      id={props.questionId}
      value={"yes"}
      checked={props.formikValue === "yes"}
      onClick={() => props.setFieldValue(props.questionId, "yes")}
    />
    <AnswerButton
      text={"NON"}
      id={props.questionId}
      value={"no"}
      checked={props.formikValue === "no"}
      onClick={() => props.setFieldValue(props.questionId, "no")}
    />
    <AnswerButton
      text={"NE SAIT PAS"}
      id={props.questionId}
      value={"unsure"}
      checked={props.formikValue === "unsure"}
      onClick={() => props.setFieldValue(props.questionId, "unsure")}
    />
  </Container>
);
