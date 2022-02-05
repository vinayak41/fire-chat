import React from "react";
import styled from "styled-components";
import dummyProfilePic from "../assets/dummy-profile-pic.jpg";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  & * {
    color: #bdc2d3;
  }
  & > div {
    display: flex;
  }
  background-color: ${(props) => (props.active ? "#12244D" : "transparent")};
  padding: 1rem;
  border-radius: 0.5rem;
  @media only screen and (max-width: 900px) {
    padding: 5px;
  }
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
  @media only screen and (max-width: 900px) {
    width: 2.5rem;
    height: 2.5rem;
  }
`;

const NameAndLastMsg = styled.div`
  margin-left: 1rem;
  & > p {
    margin: 0;
  }
  & > span {
    font-size: 0.9rem;
    color: #768a9d;
    display: block;
    margin-top: 6px;
  }
`;

const LastMsgDay = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 0.9rem;
  font-weight: 400;
`;

const UnreadMsgCount = styled.span`
  background-color: #f03c3d;
  color: white;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  text-align: center;
  line-height: 1.3rem;
  margin-left: 5px;
`;

const ChatListItem = ({
  user,
  conversationPartner,
  setConversationPartner,
}) => {
  return (
    <Wrapper
      active={user.username === conversationPartner}
      onClick={() => setConversationPartner(user.username)}
    >
      <div>
        <Avatar>
          <img src={dummyProfilePic} alt="dog" />
        </Avatar>
        <NameAndLastMsg>
          <p>{user.username}</p>
          {/* <span>Last Message</span> */}
        </NameAndLastMsg>
      </div>
      <LastMsgDay>
        {/* 30/11/2021 */}
        {/* <UnreadMsgCount>3</UnreadMsgCount>s */}
      </LastMsgDay>
    </Wrapper>
  );
};

export default ChatListItem;
