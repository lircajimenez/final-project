import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Container>
      <span className="shade1">wanderlust</span>
      <span className="shade2">wanderlust</span>
      <span className="shade3">wanderlust</span>
      <span className="shade4">wanderlust</span>
      <span className="shade5">wanderlust</span>
      <span className="shade6">wanderlust</span>
      <span className="shade7">wanderlust</span>
      <span className="shade8">wanderlust</span>

      <LinkTo to="/home">enter</LinkTo>
    </Container>
  );
};

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
  border: 1px solid white;
  border-radius: 8px;
  margin-top: 50px;
  width: 80px;
  text-align: center;
`;

export default Landing;
