import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <LinkTo to="/barcelona">
        <Container>
          <span className="shade1">barcelona</span>
          <span className="shade2">barcelona</span>
          <span className="shade3">barcelona</span>
          <span className="shade4">barcelona</span>
          <span className="shade5">barcelona</span>
          <span className="shade6">barcelona</span>
          <span className="shade7">barcelona</span>
          <span className="shade8">barcelona</span>
        </Container>
      </LinkTo>
      <LinkTo to="/montreal">
        <Container>
          <span className="shade1">montreal</span>
          <span className="shade2">montreal</span>
          <span className="shade3">montreal</span>
          <span className="shade4">montreal</span>
          <span className="shade5">montreal</span>
          <span className="shade6">montreal</span>
          <span className="shade7">montreal</span>
          <span className="shade8">montreal</span>
        </Container>
      </LinkTo>
      <LinkTo to="/tokyo">
        <Container>
          <span className="shade1">tokyo</span>
          <span className="shade2">tokyo</span>
          <span className="shade3">tokyo</span>
          <span className="shade4">tokyo</span>
          <span className="shade5">tokyo</span>
          <span className="shade6">tokyo</span>
          <span className="shade7">tokyo</span>
          <span className="shade8">tokyo</span>
        </Container>
      </LinkTo>
      <LinkTo to="/toronto">
        <Container>
          <span className="shade1">toronto</span>
          <span className="shade2">toronto</span>
          <span className="shade3">toronto</span>
          <span className="shade4">toronto</span>
          <span className="shade5">toronto</span>
          <span className="shade6">toronto</span>
          <span className="shade7">toronto</span>
          <span className="shade8">toronto</span>
        </Container>
      </LinkTo>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  line-height: 1.8;

  .shade1 {
    color: #b0b8bf;
  }
  .shade2 {
    color: #bcc2c8;
  }
  .shade3 {
    color: #c7ccd1;
  }
  .shade4 {
    color: #d2d6da;
  }
  .shade5 {
    color: #dde0e3;
  }
  .shade6 {
    color: #e9ebed;
  }
  .shade7 {
    color: #f4f5f6;
  }
  .shade8 {
    color: #ffffff;
  }
`;
const LinkTo = styled(Link)`
  text-decoration: none;
  color: white;
  cursor: pointer;
  /* border: 1px solid white;
  border-radius: 8px;
  margin-top: 50px;
  width: 80px;
  text-align: center; */
`;

export default Landing;
