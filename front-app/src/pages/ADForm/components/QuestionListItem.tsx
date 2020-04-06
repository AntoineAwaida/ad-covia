import React, { memo } from "react";
import styled from "styled-components";
import CheckIcon from "@material-ui/icons/Check";

const Container = styled.span`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 35px;
`;

const Text = styled.h5<{ active: boolean }>`
  color: ${(props) => (props.active ? "white" : "lightgray")};
`;

interface Props {
  text: string;
  value: string;
  count: number;
  active: boolean;
}

const QuestionListItemComponent = (props: Props) => (
  <Container>
    <Text active={props.active}>{props.count + 1 + ". " + props.text}</Text>
    {props.value !== "" && <CheckIcon color="primary" />}
  </Container>
);

export const QuestionListItem = memo(QuestionListItemComponent);
