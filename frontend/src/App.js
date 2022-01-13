import { useEffect } from "react";
import { io } from "socket.io-client";
import styled from "styled-components";
import ChatBox from "./components/ChatBox";
import ChatList from "./components/ChatList";
import LandingPage from "./components/LandingPage";
import {useSelector} from "react-redux"
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/actions/userActions";

const AppWrapper = styled.div`
  /* background-color: #06103a; */
  display: flex;
`;

function App() {
  const dispatch = useDispatch();
  const user = useSelector( state => state.user)
  console.log(user)
  useEffect(() => {
    // const socket = io("http://localhost:8000/");
  }, []);

  useEffect( () => {
    const token = localStorage.getItem("user-token")
    console.log(token)
    if(token) {
      try {
        const decoded = jwt_decode(token)
        dispatch(setUser(decoded.username))
      } catch (error) {
        console.log(error)
      }
    }
  }, [] )
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
