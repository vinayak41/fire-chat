import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  margin: 0.5rem 0rem 0rem 2rem;
  display: flex;
  flex-direction: ${(props) => (props.own ? "row-reverse" : "row")};
  @media only screen and (max-width: 900px) {
    margin: 5px 0rem 0rem 1rem;
  }
`;

const MessageBox = styled.div`
  max-width: 20rem;
  background-color: ${(props) => (props.own ? "#4BCEEE" : "#12244d")};
  color: ${(props) => (props.own ? "#1C4066" : "#8B90A6")};
  padding: 0.7rem;
  border-radius: 0.5rem;
  align-self: flex-end;
`;

const Message = ({ text, own }) => {
  return (
    <Wrapper own={own}>
      <MessageBox own={own}>{text}</MessageBox>
    </Wrapper>
  );
};

export default Message;
