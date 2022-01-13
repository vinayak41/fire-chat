import React from "react";
import styled from "styled-components";
import Header from "./Header";
import SendMsg from "./SendMsg";
import Messages from "./Messages";

const Wrapper = styled.div`
  flex-grow: 1;
  height: calc(100vh - 2rem);
  margin: 1rem 1rem 1rem 0rem;
  background-color: #06103a;
  border: 1px solid #3e5182;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ChatBox = () => {
  return (
    <Wrapper>
      <Header />
      <Messages />
      <SendMsg />
    </Wrapper>
  );
};

export default ChatBox;
