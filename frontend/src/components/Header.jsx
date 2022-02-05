import React from "react";
import styled from "styled-components";
import dummyProfilePic from "../assets/dummy-profile-pic.jpg";
import { BiArrowBack } from "react-icons/bi";
const HeaderWrapper = styled.div`
  width: 100%;
  background-color: #12244d;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  @media only screen and (max-width: 900px) {
    padding: 0.5rem 1rem;
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

const NameAndStatus = styled.div`
  margin-left: 1rem;
  & > p {
    margin: 0;
  }
  & > span {
    font-size: 0.9rem;
    color: #899eb3;
    display: block;
    margin-top: 6px;
  }

  & > span > span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: #35d298;
    display: inline-block;
  }
`;

const Header = ({ conversationPartner, setConversationPartner, isMobile }) => {
  const handleBackClick = () => {
    setConversationPartner(null);
  };
  return (
    <HeaderWrapper>
      {isMobile ? <BiArrowBack onClick={handleBackClick} size={20} style={{marginRight: "5px"}} /> : null}
      <Avatar>
        <img src={dummyProfilePic} alt={dummyProfilePic} />
      </Avatar>
      <NameAndStatus>
        <p>{conversationPartner}</p>
        <span>{/* <span></span> Online */}</span>
      </NameAndStatus>
    </HeaderWrapper>
  );
};

export default Header;
