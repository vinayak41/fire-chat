import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { loginRequest, registerRequest } from "../redux/actions/userActions";

const LoginRegisterWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginRegisterSwitch = styled.div`
  background-color: #12244d;
  padding: 1.2rem 0.5rem;
  border-radius: 1.5rem;
  margin-bottom: 1rem;
  margin-top: 0.5rem;
  & span {
    border-radius: 1rem;
    padding: 0.7rem 3rem;
    color: #9c9eb3;
    transition: all 0.3s ease-out;
  }
  & span:nth-child(${(props) => (props.tabValue === "login" ? 1 : 2)}) {
    background-color: #4bceee;
    color: #173056;
  }
`;

const Form = styled.form`
  border: 1px solid #3e5182;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: #3e5182 0px 2px 5px -1px, #3e5182 0px 1px 3px -1px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  & p {
    margin: 0.5 rem 0rem;
    color: #bdc2d3;
  }
  & input {
    background-color: #12244d;
    width: 95%;
    height: 2.4rem;
    border-radius: 1.2rem;
    border: none;
    padding-left: 1rem;
    color: #9c9eb3;
    font-size: 1rem;
    &:focus {
      outline: 1px solid #4bceee;
    }
    &::placeholder {
      color: #9c9eb3;
    }
  }
`;

const SubmitButton = styled.button.attrs({ type: "submit" })`
  background-color: #4bceee;
  padding: 0.5rem 2rem;
  border-radius: 1rem;
  border: 1px solid #3e5182;
  color: #173056;
  font-size: 1rem;
  margin: auto;
  margin-top: 1rem;
`;

const MessageBox = styled.div`
  border: 1px solid ${ props => props.type === "error" ? "#ff0000" : "#00ff00"};
  border-radius: 0.5rem;
  background-color: ${ props => props.type === "error" ? "#ff00004c" : "#00ff0041"};
  color: ${ props => props.type === "error" ? "#ff0000" : "#00ff00"};
  padding: 5px 1rem 5px 1rem;
`;

const LoginRegister = () => {
  const [tabValue, setTabValue] = useState("login");
  const [formData, setFormData] = useState({ username: "", password: "" });
  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.user);
  const handleInputChange = (event) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (tabValue == "login") {
      dispatch(loginRequest(formData));
    } else {
      dispatch(registerRequest(formData))
    }
  };
  return (
    <LoginRegisterWrapper>
      <Form onSubmit={handleSubmit}>
        <LoginRegisterSwitch tabValue={tabValue}>
          <span onClick={() => setTabValue("login")}>Login</span>
          <span onClick={() => setTabValue("register")}>Register</span>
        </LoginRegisterSwitch>
        {message ? <MessageBox type={message.type} >{message.text}</MessageBox> : null}
        <div>
          <p>Username</p>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={formData.username}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <p>Password</p>
          <input
            type="password"
            placeholder="username"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <SubmitButton>Submit</SubmitButton>
      </Form>
    </LoginRegisterWrapper>
  );
};

export default LoginRegister;
