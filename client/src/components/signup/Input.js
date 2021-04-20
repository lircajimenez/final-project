import React from "react";
import styled from "styled-components";

const Input = ({
  refProp,
  value,
  type,
  placeholder,
  name,
  required,
  handleChange,
}) => {
  return (
    <Wrapper>
      <label htmlFor={name}>{placeholder}</label>
      <input
        ref={refProp}
        value={value}
        type={type}
        placeholder={placeholder}
        name={name}
        required={required}
        onChange={(ev) => handleChange(ev.target.value, name)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Input;
