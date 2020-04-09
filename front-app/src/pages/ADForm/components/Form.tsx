import React from "react";
import { Question, AnswerType } from "../../../modules/questions/interfaces";
import styled from "styled-components";
import { YNUAnswerFields } from "./AnswerFields/YNUAnswerFields";
import { YNAnswerFields } from "./AnswerFields/YNAnswerFields";
import { InputAnswerFields } from "./AnswerFields/InputAnswerFields";
import { UserHashAnswerFields } from "./AnswerFields/UserHashAnswerFields";

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const QuestionTitle = styled.h3`
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 2px solid;
`;

const QuestionText = styled.h4`
  text-align: center;
  padding-bottom: 10px;
`;

const AsnwersContainer = styled.div`
  flex: 1;
  display: flex;
  padding: 30px;
`;

const generateAnswerFields = (
  questionId: string,
  answer: AnswerType,
  value: string,
  setFieldValue: (value: string) => void
) => {
  switch (answer.type) {
    case "YES_NO_UNSURE":
      return (
        <YNUAnswerFields
          formikValue={value}
          questionId={questionId}
          setFieldValue={setFieldValue}
        />
      );
    case "YES_NO":
      return (
        <YNAnswerFields
          formikValue={value}
          questionId={questionId}
          setFieldValue={setFieldValue}
        />
      );
    case "NUMBER":
    case "STRING":
      return (
        <InputAnswerFields
          questionId={questionId}
          formikValue={value}
          setFieldValue={setFieldValue}
        />
      );
    case "USER_HASK_KEY":
      return (
        <UserHashAnswerFields
          questionId={questionId}
          formikValue={value}
          setFieldValue={setFieldValue}
        />
      );
    default:
      return <p>Erreur</p>;
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
        {generateAnswerFields(
          props.question.id,
          props.question.answer,
          props.formik.values[props.question.id],
          props.formik.setFieldValue
        )}
      </AsnwersContainer>
    </Container>
  );
};
