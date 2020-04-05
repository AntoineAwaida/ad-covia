import React from "react";
import styled from "styled-components";
import { Button, Checkbox } from "@material-ui/core";

const StyledButton = styled(Button)`
  display: flex;
  flex-direction: row;
  width: 200px;
`;

const ButtonContentContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
`;

const ButtonTextContent = styled.p`
  flex: 1;
`;

interface Props {
  text: string;
  checked: boolean;
}

export const AnswerButton = (props: Props) => (
  <StyledButton variant="contained" color="primary">
    <ButtonContentContainer>
      <ButtonTextContent>{props.text}</ButtonTextContent>
      <Checkbox checked={props.checked} />
    </ButtonContentContainer>
  </StyledButton>
);
