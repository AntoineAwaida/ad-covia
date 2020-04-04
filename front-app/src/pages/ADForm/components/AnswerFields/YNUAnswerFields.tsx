import React from "react";
import styled from "styled-components";
import { Button } from "@material-ui/core";

const Container = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;

const StyleButton = styled(Button)`
  width: 150px;
`;

interface Props {
  formik: any;
}

export const YNUAnswerFields = (props: Props) => (
  <Container>
    <StyleButton variant="contained" color="primary">
      OUI
    </StyleButton>
    <StyleButton variant="contained" color="primary">
      NON
    </StyleButton>
    <StyleButton variant="contained" color="primary">
      NE SAIT PAS
    </StyleButton>
  </Container>
);
