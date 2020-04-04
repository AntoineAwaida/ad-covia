import React from "react";
import { Question } from "../../../modules/questions/interfaces";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
`;

const QuestionTitle = styled.h3`
  color: white;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 2px solid white;
`;

const QuestionText = styled.h4`
  color: white;
  text-align: center;
  padding-bottom: 10px;
`;

interface Props {
  question: Question;
  formik: any;
}

export const Form = (props: Props) => {
  return (
    <Container>
      <QuestionTitle>{props.question.shortText}</QuestionTitle>
      <QuestionText>{props.question.text}</QuestionText>
    </Container>
  );
};
