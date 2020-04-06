import React from "react";
import styled from "styled-components";
import { Button, Checkbox } from "@material-ui/core";

const StyledButton = styled(Button)`
  display: flex;
  flex-direction: row;
  width: 200px;
  z-index: 1000;
`;

const ButtonContentContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  pointer-events: none;
`;

const ButtonTextContent = styled.p`
  flex: 1;
`;

interface Props {
  text: string;
  value: string;
  id: string;
  checked: boolean;
  onClick?: any;
}

export const AnswerButton = (props: Props) => (
  <StyledButton
    variant="contained"
    color="primary"
    onClick={props.onClick}
    id={props.id}
    value={props.value}
  >
    <ButtonContentContainer>
      <ButtonTextContent>{props.text}</ButtonTextContent>
      <Checkbox checked={props.checked} />
    </ButtonContentContainer>
  </StyledButton>
);
