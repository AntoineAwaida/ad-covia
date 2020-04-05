import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`;

const StyledButton = styled(Button)`
  width: 150px;
`;

interface Props {
  formik: any;
}

export const YNAnswerFields = (props: Props) => (
  <Container>
    <StyledButton variant="contained" color="primary">
      OUI
    </StyledButton>
    <StyledButton variant="contained" color="primary">
      NON
    </StyledButton>
  </Container>
);
