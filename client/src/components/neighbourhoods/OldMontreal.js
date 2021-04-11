import React from "react";
import styled from "styled-components";

const OldMontreal = () => {
  return (
    <Container>
      <H1>Old Montreal</H1>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const H1 = styled.h1`
  color: red;
`;

export default OldMontreal;
