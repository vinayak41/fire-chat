import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MdPersonSearch } from "react-icons/md";
import styled from "styled-components";
import Modal from "./Modal";
import { getAllUsers } from "../redux/actions/userActions";
import dummyProfilePic from "../assets/dummy-profile-pic.jpg";

const Button = styled.button`
  float: right;
  background-color: transparent;
  border: none;
  cursor: pointer;

  * {
    color: #bdc2d3 !important;
  }
`;

const Container = styled.div`
  width: 30rem;
  background-color: #06103a;
  border: 1px solid #3e5182;
  border-radius: 12px;
  position: relative;
  padding: 5px 0px 5px 5px;
`;

const SearchInput = styled.input`
  width: calc(100% - 10px);
  background-color: #12244d;
  margin: 10px 5px;
  border-radius: 8px;
  border: none;
  padding: 10px;
  position: absolute;
  top: 0;
  right: 0;
  :focus {
    outline: none;
  }
`;

const ListWrapper = styled.div`
  height: 80vh;
  overflow-y: scroll;
  margin-top: 3.3rem;
`;

const UserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  font-weight: lighter;
  margin-bottom: 5px;
  background-color: #12244d;
  padding: 5px 10px;
  border-radius: 5px;
  & > div:nth-child(1) {
    display: flex;
    align-items: center;
    span {
      color: #bdc2d3;
      margin-left: 10px;
      text-align: center;
    }
  }
  & > div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      width: 8px;
      height: 8px;
      border-radius: 50%;
      /* background-color: #34d598; */
    }
  }
`;

const ProfilePicContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  border: 1px solid #ccccc9;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

const User = ({ username, onClick }) => {
  return (
    <UserWrapper onClick={onClick}>
      <div>
        <ProfilePicContainer>
          <img src={dummyProfilePic} alt="profile" />
        </ProfilePicContainer>
        <span>{username}</span>
      </div>
      <div>
        <span></span>
      </div>
    </UserWrapper>
  );
};

const FindFreinds = ({ setConversationPartner }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const { all, username } = useSelector((state) => state.user);
  const [searchValue, setSearchValue] = useState("");

  const filteredUsersList = all?.filter((user) =>
    user.username.includes(searchValue) && user.username !== username
  );

  useEffect(() => {
    if (isOpen) {
      dispatch(getAllUsers());
    }
  }, [isOpen]);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleUserClick = (username) => {
    setConversationPartner(username);
    handleClose();
  };

  return (
    <>
      <Button onClick={handleOpen}>
        <MdPersonSearch size={32} />
      </Button>
      <Modal isOpen={isOpen} handleClose={handleClose}>
        <Container>
          <SearchInput
            placeholder="Search"
            value={searchValue}
            onChange={handleSearchValueChange}
          />
          <ListWrapper>
            {filteredUsersList?.map((user) => (
              <User
                onClick={() => handleUserClick(user.username)}
                key={user.id}
                username={user.username}
              />
            ))}
            {filteredUsersList?.length === 0 ? (
              <p style={{ textAlign: "center" }}>User not found</p>
            ) : null}
          </ListWrapper>
        </Container>
      </Modal>
    </>
  );
};

export default FindFreinds;
