import React from "react";
import styled from "styled-components";

const Inputs = styled.input`
  width: 400px;
  height: 60px;
  padding: 20px;
  border-radius: 10px;
`;

const Input = (props) => {
  return <Inputs placeholder={props.text}></Inputs>;
};

export default Input;
