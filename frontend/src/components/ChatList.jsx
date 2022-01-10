import React from "react";
import styled from "styled-components";
import ChatListItem from "./ChatListItem";

const ChatListWrapper = styled.div`
  background-color: #06103a;
  width: 25rem;
  height: calc(100vh - 2rem);
  margin: 1rem;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid #3e5182;
`;

const Header = styled.h2`
  color: #bdc2d3;
`;
const Title = styled.p`
  color: #bdc2d3;
  letter-spacing: 2px;
`;

const ChatList = () => {
  return (
    <ChatListWrapper>
      <Header>Chat App</Header>
      <Title>Online</Title>
      <ChatListItem />
      <ChatListItem active />
      <ChatListItem />
      <Title>Offline</Title>
      <ChatListItem />
      <ChatListItem />
    </ChatListWrapper>
  );
};

export default ChatList;
