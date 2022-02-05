import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import Message from "./Message";

const Wrapper = styled.div`
  flex-grow: 1;
  /* max-height: 76vh; */
  overflow-y: scroll;
`;

const Messages = ({messages}) => {
  const {username} = useSelector( state => state.user)
  return (
    <Wrapper>
      {messages?.map( (message, index) => {
        return <Message key={index} text={message.text} own={message.sender === username} />
      } )}
    </Wrapper>
  );
};

export default Messages;
