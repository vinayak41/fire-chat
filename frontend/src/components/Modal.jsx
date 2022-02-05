import React from "react";
import styled from "styled-components";
import { CgClose } from "react-icons/cg";

const ModalWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(0, 0, 0, 0.85);
`;

const ModalContaint = styled.div`
  border-radius: 12px;
  overflow: hidden;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  color: white;
  border: none;
`;

const Modal = ({ isOpen, handleClose, children }) => {
  return (
    <>
      {isOpen ? (
        <ModalWrapper>
          <CloseButton onClick={handleClose}>
            <CgClose size={40} />
          </CloseButton>
          <ModalContaint>{children}</ModalContaint>
        </ModalWrapper>
      ) : null}
    </>
  );
};

export default Modal;
