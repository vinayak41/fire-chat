import React, { useEffect, useRef, useState } from "react";
import { IoMdSettings } from "react-icons/io";
import styled from "styled-components";

const Container = styled.div`
  position: absolute;
  top: ${(props) => props.offsetTop};
  left: ${(props) => props.offsetLeft};
  background-color: #12244d;
  border: 1px solid #3e5182;
  border-radius: 5px;
  font-size: 1rem;
  padding: 5px 2rem;

  p {
    margin: 0;
  }
`;

const Setting = ({ openSetting, toggleSettingOpenClose }) => {
  const buttonRef = useRef();

  const handleButtonClick = (event) => {
    toggleSettingOpenClose();
    event.stopPropagation();
  };

  const handleLogout = () => {
    localStorage.setItem("user-token", null);
    window.location.href = "/";
  };

  useEffect(() => {
    if (openSetting) {
      window.document.addEventListener("click", () => {
        toggleSettingOpenClose();
      });
    } else {
      window.document.removeEventListener("click", () => {
        toggleSettingOpenClose();
      });
    }
  }, [openSetting]);

  return (
    <>
      <span ref={buttonRef} onClick={handleButtonClick}>
        <IoMdSettings size={28} />
      </span>
      {openSetting ? (
        <Container
          offsetTop={buttonRef?.current?.offsetTop}
          offsetLeft={buttonRef?.current?.offsetLeft}
        >
          <p onClick={handleLogout}>Logout</p>
        </Container>
      ) : null}
    </>
  );
};

export default Setting;
