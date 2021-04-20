import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";
import Input from "./signup/Input";
import { UserContext } from "./UserContext";

const LogIn = () => {
  const { setCurrentUser, setUserSigned, currentUser } = useContext(
    UserContext
  );
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const history = useHistory();

  const handleChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
    setErrorMessage("");
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    setStatus("pending");

    fetch("/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((json) => {
        const { data, status, message } = json;
        console.log("login data: ", data);
        // const user = data.username;
        // localStorage.setItem("user_id", data.id);
        if (status === 201) {
          console.log("login confirmed", message);
          setStatus("confirmed");
          setUserSigned(true);
          setCurrentUser(data.username);
          history.push("/");
        } else {
          console.log("login error", message);
          setStatus("error");
          setErrorMessage(message);
        }
      });
  };

  return (
    <Wrapper>
      <h1>Welcome back!</h1>
      <Input
        name="username"
        placeholder="username"
        type="text"
        required="required"
        handleChange={handleChange}
        value={formData.username || ""}
      />
      <Input
        name="password"
        placeholder="password"
        type="password"
        required="required"
        handleChange={handleChange}
        value={formData.password || ""}
      />
      <button onClick={handleSubmit}>Submit</button>
      {status === "error" && <div>{errorMessage}</div>}
      <span>Not a user yet?</span>
      <Link to="/signup">Create an account</Link>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  height: 95vh;
  line-height: 1.5;
`;

export default LogIn;
