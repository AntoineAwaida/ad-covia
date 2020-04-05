import React from "react";
import styled from "styled-components";
import { AnswerButton } from "./AnswerButton";
import { AnswerValueType } from "../../../../modules/questions/interfaces";

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

interface Props {
  value: AnswerValueType;
}

export const YNAnswerFields = (props: Props) => (
  <Container>
    <AnswerButton text={"OUI"} checked={props.value === true} />
    <AnswerButton text={"NON"} checked={!props.value === false} />
  </Container>
);
