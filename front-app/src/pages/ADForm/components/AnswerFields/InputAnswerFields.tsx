import React from "react";
import styled from "styled-components";
import { TextField } from "@material-ui/core";

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
`;

interface Props {
  questionId: string;
  formikValue: string;
  setFieldValue: (field: string, value: string) => void;
}

export const InputAnswerFields = (props: Props) => (
  <Container>
    <TextField
      id={props.questionId}
      name={props.questionId}
      value={props.formikValue}
      size="medium"
      variant="filled"
      label={props.questionId}
      onChange={(event) =>
        props.setFieldValue(props.questionId, event.target.value)
      }
    />
  </Container>
);
