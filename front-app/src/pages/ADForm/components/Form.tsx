import React from "react";
import { Question, AnswerType } from "../../../modules/questions/interfaces";
import styled from "styled-components";
import { YNUAnswerFields } from "./AnswerFields/YNUAnswerFields";
import { YNAnswerFields } from "./AnswerFields/YNAnswerFields";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
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

const AsnwersContainer = styled.div`
  flex: 1;
  display: flex;
  padding: 30px;
`;

const generateAnswerFields = (answer: AnswerType, formik: any) => {
  switch (answer.type) {
    case "YES_NO_UNSURE":
      return <YNUAnswerFields formik={formik} />;
    case "YES_NO":
      return <YNAnswerFields formik={formik} />;
    default:
      return <p>test</p>;
  }
};

interface Props {
  question: Question;
  formik: any;
}

export const Form = (props: Props) => {
  return (
    <Container>
      <QuestionTitle>{props.question.shortText}</QuestionTitle>
      <QuestionText>{props.question.text}</QuestionText>
      <AsnwersContainer>
        {generateAnswerFields(props.question.answer, props.formik)}
      </AsnwersContainer>
    </Container>
  );
};
