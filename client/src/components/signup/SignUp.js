import React, { useRef, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { motion } from "framer-motion";
import styled from "styled-components";
import Input from "./Input";
import human from "../../assets/illustrations/Chatting-small.png";
import "../styles.css";

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
      <img src={human} alt="Signup illustration" />
      <Container>
        <h1> Welcome to wandergram </h1>
        <h2> Provide information to join! </h2>
        <Form>
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
          <motion.button
            className="submit-btn"
            disabled={disabled}
            onClick={handleSubmit}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
          >
            Create account
          </motion.button>
        </Form>
        {/* <div ref={errorMessage} id="error" name="error"></div> */}
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  /* flex-direction: column; */
  align-items: center;
  justify-content: space-evenly;
  color: white;
  height: 90vh;
  line-height: 1.5;
  /* border: 1px solid red; */
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 600px;
  width: 30%;
  /* border: 1px solid red; */

  h1 {
    font-size: 2em;
  }

  h2 {
    font-weight: 200;
  }
`;
const Form = styled.form`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
  width: 80%;
  height: 200px;
`;
export default SignUp;
