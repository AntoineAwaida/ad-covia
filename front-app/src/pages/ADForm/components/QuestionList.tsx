import React, { memo } from "react";
import { QuestionListItem } from "./QuestionListItem";
import {
  Question,
  AnswerValueType,
} from "../../../modules/questions/interfaces";

interface Props {
  questions: Question[];
  answers: { [id: string]: AnswerValueType };
  currentQuestionIndex: number;
}

const QuestionListComponent = (props: Props) => (
  <div>
    {props.questions.map((question, index) => (
      <QuestionListItem
        key={question.id}
        count={index}
        active={props.currentQuestionIndex === index}
        text={question.shortText}
        value={props.answers[question.id]}
      />
    ))}
  </div>
);

export const QuestionList = memo(QuestionListComponent);
