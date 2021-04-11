import React from "react";
import styled from "styled-components";

const Landing = () => {
  return (
    <Container>
      <H1>Landing</H1>
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

export default Landing;
