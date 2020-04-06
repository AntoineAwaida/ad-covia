import React, { memo } from "react";
import styled from "styled-components";
import { QuestionList } from "./components/QuestionList";
import { mockQuestions } from "../../modules/questions/mocks";
import { useADForm } from "./useADForm";
import { Form } from "./components/Form";
import { Button } from "@material-ui/core";

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
  padding-right: 10px;
  padding-left: 10px;
`;

const ListTitle = styled.h3`
  color: white;
  text-align: center;
  padding-bottom: 10px;
  border-bottom: 2px solid white;
`;

const FormContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  border: 2px solid white;
  border-radius: 15px;
  padding-right: 10px;
  padding-left: 10px;
  padding-bottom: 10px;
`;

const DirectionButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 30px;
`;

const ADFormComponent = () => {
  const {
    formik,
    currentQuestionIndex,
    goToPreviousQuestion,
    goToNextQuestion,
  } = useADForm(mockQuestions);

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
      <FormContainer>
        <Form question={mockQuestions[currentQuestionIndex]} formik={formik} />
        <DirectionButtonsContainer>
          <Button
            variant="contained"
            onClick={goToPreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Précédent
          </Button>
          {currentQuestionIndex < mockQuestions.length - 1 ? (
            <Button variant="contained" onClick={goToNextQuestion}>
              Suivant
            </Button>
          ) : (
            <Button variant="contained" onClick={() => formik.handleSubmit()}>
              Envoyer
            </Button>
          )}
        </DirectionButtonsContainer>
      </FormContainer>
    </MainContainer>
  );
};

export const ADForm = memo(ADFormComponent);
