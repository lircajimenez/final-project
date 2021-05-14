import React, { useContext } from "react";
import styled from "styled-components";
import { NavLink, useHistory } from "react-router-dom";
import { FaUserCircle, FiLogOut } from "react-icons/all";
import { UserContext } from "./UserContext";
import { useDarkMode } from "./styles/useDarkMode";
import { Toggle } from "./styles/Toggle";

const Header = ({ theme, toggleTheme }) => {
  const { userSigned, setUserSigned, currentUser, setCurrentUser } = useContext(
    UserContext
  );
  const history = useHistory();
  // const [theme, toggleTheme] = useDarkMode();

  const signOut = () => {
    setUserSigned(false);
    setCurrentUser("");
    history.push("/");
  };
  // console.log("********", currentUser);
  return (
    <Nav>
      <Toggle theme={theme} toggleTheme={toggleTheme} />
      <Wrapper>
        <Links>
          <NavLinkTo exact to="/">
            Explore more cities
          </NavLinkTo>
        </Links>
        {userSigned ? (
          <Div>
            <span>hello, {currentUser !== {} && currentUser}</span>
            <Button onClick={signOut}>
              <FiLogOut />
            </Button>
          </Div>
        ) : (
          <SignIn exact to="/login">
            <FaUserCircle />
            My account
          </SignIn>
        )}
      </Wrapper>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  width: 100vw;
  height: 70px;
  /* background: black; */
  padding: var(--page-horizontal-padding);
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  /* color: white; */
  width: 100%;
`;
const Links = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 280px;
  margin-right: 25px;
  /* border: 1px solid red; */
`;
const NavLinkTo = styled(NavLink)`
  /* color: white; */
  color: ${(props) => props.theme.text};
  text-decoration: none;
  cursor: pointer;

  /* &.active {
    color: var(--accent-color);
  } */
`;
const SignIn = styled(NavLink)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* color: white; */
  color: ${(props) => props.theme.text};
  text-decoration: none;
  cursor: pointer;
  /* border: 1px solid red; */
  width: 125px;
  height: 100%;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Button = styled.button`
  /* color: white; */
  cursor: pointer;
  border: none;
  background: black;
  font-size: 1.2em;
  margin-left: 5px;
`;
export default Header;
