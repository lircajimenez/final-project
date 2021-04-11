import React from "react";
import styled from "styled-components";

const MontRoyal = () => {
  return (
    <Container>
      <H1>Mont-Royal</H1>
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

export default MontRoyal;
