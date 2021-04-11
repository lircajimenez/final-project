import React from "react";
import styled from "styled-components";

const Downtown = () => {
  return (
    <Container>
      <H1>Downtown</H1>
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

export default Downtown;
