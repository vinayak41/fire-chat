import React from "react";
import styled from "styled-components";
import dummyProfilePic from "../assets/dummy-profile-pic.jpg";
import Message from "./Message";

const Wrapper = styled.div`
  flex-grow: 1;
  height: calc(100vh - 2rem);
  margin: 1rem 1rem 1rem 0rem;
  background-color: #06103a;
  border-radius: 1rem;
  border: 1px solid #3e5182;
  overflow: hidden;
`;

const Avatar = styled.div`
  width: 3rem;
  height: 3rem;
  border: 2px solid #e2e0d8;
  overflow: hidden;
  border-radius: 50%;
  & > img {
    width: 100%;
  }
`;

const Header = styled.div`
  width: 100%;
  background-color: #12244d;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
`;

const NameAndStatus = styled.div`
  margin-left: 1rem;
  & > p {
    margin: 0;
  }
  & > span {
    font-size: 0.9rem;
    color: #899eb3;
    display: block;
    margin-top: 6px;
  }

  & > span > span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #35d298;
    display: inline-block;
  }
`;

const ChatBox = () => {
  return (
    <Wrapper>
      <Header>
        <Avatar>
          <img src={dummyProfilePic} alt={dummyProfilePic} />
        </Avatar>
        <NameAndStatus>
          <p>Vinayak khandekar</p>
          <span>
            <span></span> Online
          </span>
        </NameAndStatus>
      </Header>
      <Message text={"Hii"} />
      <Message text={"Hellow"} own />
      <Message text={"Vinayak khandekar here"} />
      <Message text={"me too"} own />
    </Wrapper>
  );
};

export default ChatBox;
