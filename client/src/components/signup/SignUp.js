import React, { useRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import Input from "./Input";

const initialState = {
  username: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUp = () => {
  const [formData, setFormData] = useState(initialState);
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();

  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);
  const confirmPassword = useRef(null);
  //   const errorMessage = useRef(null);

  useEffect(() => {
    Object.values(formData).includes("")
      ? setDisabled(true)
      : setDisabled(false);
  }, [formData, setDisabled]);

  const handleChange = (value, name) => {
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = () => {
    const emailParts = formData.email.split("@");
    return (
      emailParts.length === 2 &&
      emailParts[0].length > 0 &&
      emailParts[1].length > 0
    );
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (validateEmail) {
      fetch("/signup", {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((json) => {
          console.log("json", json);
          const { status, message } = json;
          if (status === 201) {
            console.log("confirmed", message);
            history.push("/login");
          } else if (status === 500) {
            console.log("error", message);
          }
        });
    }
  };

  return (
    <Wrapper>
      <h1> Welcome to wandergram </h1>
      <h2> Provide information to join! </h2>
      <form>
        <Input
          refProp={username}
          value={formData.username || ""}
          type="text"
          placeholder="username"
          name="username"
          required="required"
          handleChange={handleChange}
        />
        <Input
          refProp={email}
          value={formData.email || ""}
          type="text"
          placeholder="email"
          name="email"
          required="required"
          handleChange={handleChange}
        />
        <Input
          refProp={password}
          value={formData.password || ""}
          type="password"
          placeholder="password"
          name="password"
          required="required"
          handleChange={handleChange}
        />
        <Input
          refProp={confirmPassword}
          value={formData.confirmPassword || ""}
          type="password"
          placeholder="confirm password"
          name="confirmPassword"
          required="required"
          handleChange={handleChange}
        />
        <button disabled={disabled} onClick={handleSubmit}>
          Submit
        </button>
      </form>
      {/* <div ref={errorMessage} id="error" name="error"></div> */}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
  height: 100vh;
  line-height: 1.5;
`;

export default SignUp;
