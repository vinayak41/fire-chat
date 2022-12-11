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
  /* overflow: hidden; */
  border-radius: 50%;
  position: relative;

  & > div {
    width: 100%;
    height: 100%;
    border-radius: 5rem;
    overflow: hidden;
    & > img {
      width: 100%;
    }
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

const OnlineIndicator = styled.span`
  background-color: #21c700;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  position: absolute;
  top: 0;
  right: 0;
  display: inline-block;
  z-index: 1;
`;

const ChatListItem = ({
  user,
  conversationPartner,
  setConversationPartner,
}) => {
  console.log({user})
  return (
    <Wrapper
      active={user.username === conversationPartner}
      onClick={() => setConversationPartner(user.username)}
    >
      <div>
        <Avatar>
          <div>
            <img src={dummyProfilePic} alt="dog" />
          </div>
          <span className></span>
          <OnlineIndicator />
        </Avatar>
        <NameAndLastMsg>
          <p>{user.username}</p>
          {/* <span>Last Message</span> */}
        </NameAndLastMsg>
      </div>
      <LastMsgDay>
        {/* 30/11/2021 */}
        {/* <UnreadMsgCount>3</UnreadMsgCount> */}
      </LastMsgDay>
    </Wrapper>
  );
};

export default ChatListItem;
