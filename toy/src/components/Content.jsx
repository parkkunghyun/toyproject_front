import React from "react";
import styled from "styled-components";

const ContentBox = styled.div`
  width: 600px;
  height: 60px;
  padding: 20px;
  border: 1px solid #adb5bd;
  border-radius: 10px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
`;

const Content = (props) => {
  return (
    <>
      <ContentBox>
        <p>{props.title}</p>
        <p style={{ color: "#adb5bd" }}>{props.date}</p>
      </ContentBox>
    </>
  );
};

export default Content;
