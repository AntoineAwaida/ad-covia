import React, { memo } from "react";
import styled from "styled-components";

const Text = styled.h5`
  color: white;
`;

interface Props {
  text: string;
  value: string;
  count: number;
}

const QuestionListItemComponent = (props: Props) => (
  <Text>
    {props.count + 1 + ". " + props.text} {props.value !== "" ? "OK" : "KO"}
  </Text>
);

export const QuestionListItem = memo(QuestionListItemComponent);
