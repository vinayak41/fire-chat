import React from "react";
import styled from "styled-components";
import dummyProfilePic from "../assets/dummy-profile-pic.jpg";


const HeaderWrapper = styled.div`
  width: 100%;
  background-color: #12244d;
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
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

const Header = () => {
  return (
    <HeaderWrapper>
      <Avatar>
        <img src={dummyProfilePic} alt={dummyProfilePic} />
      </Avatar>
      <NameAndStatus>
        <p>Vinayak khandekar</p>
        <span>
          <span></span> Online
        </span>
      </NameAndStatus>
    </HeaderWrapper>
  );
};

export default Header;
