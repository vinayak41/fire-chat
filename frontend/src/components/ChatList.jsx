import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import socket from "../socket.io";
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

const ChatList = ({ conversationPartner, setConversationPartner }) => {
  const [connectedUsers, setConnectedUsers] = useState([]);
  const { username } = useSelector((state) => state.user);
  useEffect(() => {
    socket.on("connected_users", (payload) => {
      setConnectedUsers(payload);
    });
  });
  return (
    <ChatListWrapper>
      <Header>Chat App</Header>
      {connectedUsers.map((user) =>
        user.username === username ? null : (
          <ChatListItem
            key={user.username}
            user={user}
            conversationPartner={conversationPartner}
            setConversationPartner={setConversationPartner}
          />
        )
      )}
    </ChatListWrapper>
  );
};

export default ChatList;
