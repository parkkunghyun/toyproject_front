import React from "react";
import Nav from "../components/Nav";
import Content from "../components/Content";

const Main = () => {
  return (
    <>
      <Nav></Nav>
      <div className="wrapper">
        <h2 className="title">게시판</h2>
        <Content
          title="[연애고민]남자친구가 연락을 잘 안봐요ㅠㅠ"
          date="2024-03-30"
        ></Content>
        <Content
          title="[후기]XX레스토랑 내돈내산 후기"
          date="2024-06-30"
        ></Content>
        <Content
          title="[연애고민]연인간의 연락빈도 어느정도가 적당한가요?"
          date="2024-01-15"
        ></Content>
      </div>
    </>
  );
};

export default Main;
