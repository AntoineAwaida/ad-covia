import React, { memo } from "react";
import { QuestionListItem } from "./QuestionListItem";
import { Question } from "../../../modules/questions/interfaces";
import styled from "styled-components";

const ListContainer = styled.div`
  padding-right: 10px;
  padding-left: 10px;
`;

interface Props {
  questions: Question[];
  answers: { [id: string]: string };
  currentQuestionIndex: number;
}

const QuestionListComponent = (props: Props) => (
  <ListContainer>
    {props.questions.map((question, index) => (
      <QuestionListItem
        key={question.id}
        count={index}
        active={props.currentQuestionIndex === index}
        text={question.shortText}
        value={props.answers[question.id]}
      />
    ))}
  </ListContainer>
);

export const QuestionList = memo(QuestionListComponent);
