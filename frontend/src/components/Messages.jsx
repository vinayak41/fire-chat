import React from "react";
import styled from "styled-components";
import Message from "./Message";

const Wrapper = styled.div`
  flex-grow: 1;
`;

const Messages = () => {
  return (
    <Wrapper>
      <Message text={"Hii"} />
      <Message text={"Hellow"} own />
      <Message text={"Vinayak khandekar here"} />
      <Message text={"me too"} own />
    </Wrapper>
  );
};

export default Messages;
