import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import socket from "../socket.io";
import ChatListItem from "./ChatListItem";
import FindFreinds from "./FindFreinds";
import Setting from "./Setting";

const ChatListWrapper = styled.div`
  background-color: #06103a;
  width: 25%;
  height: calc(100vh - 20px);
  margin: 10px;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid #3e5182;
  @media only screen and (max-width: 900px) {
    padding: 10px;
    width: 38%;
  }
  @media only screen and (max-width: 520px) {
    width: calc(100% - 20px );
    position: absolute
  }
`;

const Header = styled.h2`
  color: #bdc2d3;
  margin-top: 5px;
  @media only screen and (max-width: 900px) {
    font-size: 1.2rem
  }
`;
const Title = styled.p`
  color: #bdc2d3;
  letter-spacing: 2px;
`;
const SettingButton = styled.button`
  background-color: transparent;
  float: right;
  border: none;
  padding: 3px;
  * {
    color: #bdc2d3;
  }
`;

const ChatList = ({ conversationPartner, setConversationPartner }) => {
  const conversations = useSelector((state) => state.conversations);
  const { username } = useSelector((state) => state.user);
  const [openSetting, setOpenSetting] = useState(false);
  const toggleSettingOpenClose = () => {
    setOpenSetting(!openSetting);
  };
  return (
    <ChatListWrapper>
      <Header>
        🔥 fire.chat
        <SettingButton>
          <Setting
            openSetting={openSetting}
            toggleSettingOpenClose={toggleSettingOpenClose}
          />
        </SettingButton>
        <FindFreinds setConversationPartner={setConversationPartner} />
      </Header>
      {conversations.map((conversation) =>
        conversation.partner === username ? null : (
          <ChatListItem
            key={conversation.partner}
            user={{ username: conversation.partner }}
            conversationPartner={conversationPartner}
            setConversationPartner={setConversationPartner}
          />
        )
      )}
    </ChatListWrapper>
  );
};

export default ChatList;
