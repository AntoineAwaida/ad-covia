import React, { memo } from "react";
import styled from "styled-components";
import { QuestionList } from "./components/QuestionList";
import { mockQuestions } from "../../modules/questions/mocks";

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

const ADFormComponent = () => (
  <MainContainer>
    <QuestionListContainer>
      <ListTitle>Questions</ListTitle>
      <QuestionList
        questions={mockQuestions}
        answers={{ fievre: "OUI", anosmie: "" }}
      />
    </QuestionListContainer>
    <FormContainer />
  </MainContainer>
);

export const ADForm = memo(ADFormComponent);
