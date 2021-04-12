import React from "react";
import styled from "styled-components";

const HomePage = () => {
  return (
    <Container>
      <H1>HomePage</H1>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;
const H1 = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
  color: red;
`;

export default HomePage;
