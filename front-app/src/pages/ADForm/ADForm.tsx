import React, { memo } from "react";
import styled from "styled-components";
import { QuestionList } from "./components/QuestionList";
import { mockQuestions } from "../../modules/questions/mocks";
import { useADForm } from "./useADForm";

const MainContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  margin: 50px;
`;

const QuestionListContainer = styled.div`
  flex: 1;
  align-items: center;
  border: 2px solid white;
  border-radius: 20px;
  margin-right: 15px;
  padding: 10px;
`;

const ListTitle = styled.h3`
  color: white;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 2px solid white;
`;

const FormContainer = styled.div`
  flex: 3;
  align-items: center;
  border: 2px solid white;
  border-radius: 15px;
`;

const ADFormComponent = () => {
  const { formik, currentQuestionIndex } = useADForm();

  return (
    <MainContainer>
      <QuestionListContainer>
        <ListTitle>Questions</ListTitle>
        <QuestionList
          questions={mockQuestions}
          answers={formik.values}
          currentQuestionIndex={currentQuestionIndex}
          // errors={formik.errors} TBD WHEN WE'LL MANAGE ERRORS
        />
      </QuestionListContainer>
      <FormContainer />
    </MainContainer>
  );
};

export const ADForm = memo(ADFormComponent);
