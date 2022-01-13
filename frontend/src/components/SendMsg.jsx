import React from "react";
import styled from "styled-components";
import { BsEmojiLaughing } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { RiSendPlaneFill } from "react-icons/ri";

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

const SendMsg = () => {
  return (
    <SendMsgWrapper>
      <FormWrapper>
        <form>
          <input placeholder="Write your message..."></input>
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
