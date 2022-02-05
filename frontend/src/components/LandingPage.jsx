import React from "react";
import styled from "styled-components";
import LoginRegister from "./LoginRegister";

const Wrapper = styled.div`
  width: 100%;
  height: calc(100vh - 2rem);
  margin: 1rem;
  border-radius: 1rem;
  background-color: #06103a;
  border: 1px solid #3e5182;
  display: flex;
  flex-wrap: wrap;
`;

const LeftSection = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  padding-left: 7rem;
  width: 50%;
  & > p {
    font-size: 3rem;
  }
`;





const LandingPage = () => {
  return (
    <Wrapper>
      <LeftSection>
        <p>Stay Connected with your freinds and family </p>
      </LeftSection>
      <LoginRegister />
    </Wrapper>
  );
};

export default LandingPage;
