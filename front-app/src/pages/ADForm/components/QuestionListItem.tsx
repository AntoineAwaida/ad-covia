import React, { memo } from "react";
import styled from "styled-components";

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
  <Text active={props.active}>
    {props.count + 1 + ". " + props.text} {props.value !== "" ? "OK" : "KO"}
  </Text>
);

export const QuestionListItem = memo(QuestionListItemComponent);
