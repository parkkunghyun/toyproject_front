import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid gray;
  box-shadow: 0 4px 4px -4px black;
  margin: 20px 0;
`;

const Title = styled.h2`
  font-size: 32px;
  cursor: pointer;
`;

const Nav = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <Title onClick={() => navigate("/")}>우리 두리</Title>
      <div className="navbar">
        <span onClick={() => navigate("/login")} className="sub">
          로그인
        </span>
        <span onClick={() => navigate("/signup")} className="sub">
          회원가입
        </span>
      </div>
    </Wrapper>
  );
};

export default Nav;
