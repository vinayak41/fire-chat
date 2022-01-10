import { useEffect } from "react";
import { io } from "socket.io-client";
import styled from "styled-components";
import ChatBox from "./components/ChatBox";
import ChatList from "./components/ChatList";

const AppWrapper = styled.div`
  /* background-color: #06103a; */
  display: flex;
`;

function App() {
  useEffect(() => {
    // const socket = io("http://localhost:8000/");
  }, []);
  return (
    <AppWrapper>
      <ChatList />
      <ChatBox />
    </AppWrapper>
  );
}

export default App;
