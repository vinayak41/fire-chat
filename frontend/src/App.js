import { useEffect } from "react";
import { io } from "socket.io-client";
import styled from "styled-components";
import ChatBox from "./components/ChatBox";
import ChatList from "./components/ChatList";
import LandingPage from "./components/LandingPage";
import {useSelector} from "react-redux"

const AppWrapper = styled.div`
  /* background-color: #06103a; */
  display: flex;
`;

function App() {
  const user = useSelector( state => state.user)
  console.log(user)
  useEffect(() => {
    // const socket = io("http://localhost:8000/");
  }, []);
  return (
    <AppWrapper>
      {user?.isAuthenticated ? (
        <>
          <ChatList />
          <ChatBox />
        </>
      ) : (
        <LandingPage />
      )}
    </AppWrapper>
  );
}

export default App;
