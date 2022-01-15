import React, { useState } from "react";
import styled from "styled-components";
import { BsEmojiLaughing } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { RiSendPlaneFill } from "react-icons/ri";
import socket from "../socket.io";
import { useDispatch, useSelector } from "react-redux";
import { newMessageSent } from "../redux/actions/conversationActions";

const SendMsgWrapper = styled.div`
  height: 3.5rem;
  box-sizing: border-box;
  width: calc(100% - 4rem);
  background-color: #12244d;
  display: flex;
  align-items: center;
  /* padding: 1rem 2rem; */
  margin: 2rem;
  border-radius: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const FormWrapper = styled.div`
  width: 100%;
  & form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-right: 8px;
  }
  & input {
    background-color: transparent;
    border: none;
    flex-grow: 1;
    height: 100%;
    font-size: 1rem;
    color: #8b90a6;
    margin-left: 1rem;
    &:focus {
      outline: none;
    }
    &::placeholder {
      color: #8b90a6;
    }
  }
  & button {
    background-color: #4bceee;
    color: #1c4066;
    border: none;
    border-radius: 50%;
    height: 2.5rem;
    width: 2.5rem;
    & > * {
      margin-top: 4px;
    }
  }
`;

const SendMsg = ({ conversationPartner }) => {
  const dispatch = useDispatch();
  const [message, setMessage] = useState("");
  const { username } = useSelector((state) => state.user);

  const handleMsgChange = (event) => {
    setMessage(event.target.value);
  };

  const handelSendMsg = (event) => {
    event.preventDefault();
    const messageObj = {
      receiver: conversationPartner,
      text: message,
      sender: username,
    };
    if (message.length > 0) {
      socket.emit("send_message", messageObj);
      dispatch(newMessageSent(messageObj));
      setMessage("")
    }
  };
  return (
    <SendMsgWrapper>
      <FormWrapper>
        <form onSubmit={handelSendMsg}>
          <input
            placeholder="Write your message..."
            value={message}
            onChange={handleMsgChange}
          ></input>
          <button type="submit">
            <RiSendPlaneFill size={24} />
          </button>
        </form>
      </FormWrapper>
      {/* <BsEmojiLaughing />
      <GrAttachment /> */}
    </SendMsgWrapper>
  );
};

export default SendMsg;
