import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BiUserCircle, FaUserCircle } from "react-icons/all";

const Header = () => {
  return (
    <Nav>
      <h1>Montréal</h1>
      <Wrapper>
        <Links>
          <NavLinkTo exact to="/">
            About
          </NavLinkTo>
          <NavLinkTo exact to="/">
            Explore
          </NavLinkTo>
          <NavLinkTo exact to="/">
            Stories
          </NavLinkTo>
        </Links>
        <SignIn exact to="/">
          <FaUserCircle />
          My account
        </SignIn>
      </Wrapper>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  width: 100vw;
  height: 70px;
  background: black;
  padding: var(--page-horizontal-padding);

  h1 {
    color: var(--primary-color);
    font-size: 2em;
  }
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  color: white;
  width: 100%;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 280px;
  margin-left: 25px;
  /* border: 1px solid red; */
`;
const NavLinkTo = styled(NavLink)`
  color: white;
  text-decoration: none;
  cursor: pointer;

  &.active {
    color: var(--accent-color);
  }
`;
const SignIn = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: white;
  text-decoration: none;
  cursor: pointer;
  /* border: 1px solid red; */
  width: 125px;
  height: 100%;
`;
export default Header;
