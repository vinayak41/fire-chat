import React from "react";
import styled from "styled-components";
import Header from "./Header";
import SendMsg from "./SendMsg";
import Messages from "./Messages";
import conversationIcon from "../assets/conversation.png";
import { useDispatch, useSelector } from "react-redux";
import { createNewConversation } from "../redux/actions/conversationActions";

const Wrapper = styled.div`
  flex-grow: 1;
  height: calc(100vh - 20px);
  margin: 10px 10px 10px 0rem;
  background-color: #06103a;
  border: 1px solid #3e5182;
  border-radius: 1rem;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media only screen and (max-width: 520px) {
    width: calc(100% - 20px);
    margin: 10px;
    position: absolute;
  }
`;

const DefaultScreen = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & p {
    font-size: 2rem;
    @media only screen and (max-width: 900px) {
      font-size: 1rem;
    }
  }
  & img {
    width: 7rem;
    height: 7rem;
  }
`;

const ChatBox = ({ conversationPartner, setConversationPartner, isMobile }) => {
  const dispatch = useDispatch();
  const conversations = useSelector((state) => state.conversations);
  const conversation = conversations?.find(
    (conversation) => conversation.partner === conversationPartner
  );
  if (!conversation && conversationPartner) {
    dispatch(createNewConversation(conversationPartner));
  }
  return (
    <Wrapper>
      {conversationPartner ? (
        <>
          <Header
            conversationPartner={conversationPartner}
            setConversationPartner={setConversationPartner}
            isMobile={isMobile}
          />
          <Messages messages={conversation?.messages} />
          <SendMsg conversationPartner={conversationPartner} />
        </>
      ) : (
        <DefaultScreen>
          <p>Select user to start conversation</p>
          <img src={conversationIcon} alt="conversation" />
        </DefaultScreen>
      )}
    </Wrapper>
  );
};

export default ChatBox;
