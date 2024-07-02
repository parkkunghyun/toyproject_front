import React from "react";
import Nav from "../components/Nav";
import { styled } from "styled-components";
import Input from "../components/Input";

const Login = () => {
  return (
    <>
      <Nav></Nav>
      <div className="wrapper">
        <h1 className="title">로그인</h1>
        <form className="form">
          <Input text="아이디를 입력해주세요"></Input>
          <Input text="비밀번호를 입력해주세요"></Input>
          <button className="signbtn">로그인</button>
        </form>
      </div>
    </>
  );
};

export default Login;
