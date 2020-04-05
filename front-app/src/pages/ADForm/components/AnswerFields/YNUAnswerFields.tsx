import React from "react";
import styled from "styled-components";
import { AnswerValueType } from "../../../../modules/questions/interfaces";
import { AnswerButton } from "./AnswerButton";

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

interface Props {
  value: AnswerValueType;
}

export const YNUAnswerFields = (props: Props) => (
  <Container>
    <AnswerButton text={"OUI"} checked={props.value === "YES"} />
    <AnswerButton text={"NON"} checked={props.value === "NO"} />
    <AnswerButton text={"NE SAIT PAS"} checked={props.value === "UNSURE"} />
  </Container>
);
