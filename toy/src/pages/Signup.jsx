import React from "react";
import Nav from "../components/Nav";
import { styled } from "styled-components";
import Input from "../components/Input";

const Title = styled.h1`
  font-size: 48px;
  margin-bottom: 40px;
`;

const Signup = () => {
  return (
    <>
      <Nav></Nav>
      <div className="wrapper">
        <Title>회원가입</Title>
        <p>쉽고 편리하게 회원가입 해보세요!</p>
        <p style={{ color: "#adb5bd" }}>
          기존 사용 계정으로 간편하게 가입하고,여러 혜택과 게시판을
          이용해보세요.
        </p>
        <form className="form">
          <Input text="아이디를 입력해주세요"></Input>
          <Input text="비밀번호를 입력해주세요"></Input>
          <Input text="비밀번호를 한번 더 입력해주세요"></Input>
          <button className="signbtn">회원가입</button>
        </form>
      </div>
    </>
  );
};

export default Signup;
