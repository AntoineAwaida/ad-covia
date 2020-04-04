import React, { memo } from "react";
import styled from "styled-components";

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

const FormContainer = styled.div`
  flex: 3;
  align-items: center;
  border: 2px solid white;
  border-radius: 15px;
`;

const ADFormComponent = () => (
  <MainContainer>
    <QuestionListContainer />
    <FormContainer />
  </MainContainer>
);

export const ADForm = memo(ADFormComponent);
