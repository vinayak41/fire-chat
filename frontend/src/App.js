import { useEffect } from "react";
import styled from "styled-components";
import LandingPage from "./components/LandingPage";
import { useSelector } from "react-redux";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/actions/userActions";
import Main from "./components/Main";
import { SocketContextProvider } from "./Context/Socket";

const AppWrapper = styled.div`
  display: flex;
  *::-webkit-scrollbar,
  *::-webkit-scrollbar-thumb {
    width: 26px;
    border-radius: 13px;
    background-clip: padding-box;
    border: 10px solid transparent;
  }

  *::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 0 10px;
  }
`;

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const token = localStorage.getItem("user-token");
    if (token) {
      try {
        const decoded = jwt_decode(token);
        dispatch(setUser(decoded.username));
      } catch (error) {
        console.log(error);
      }
    }
  }, []);
  return (
    <AppWrapper>
      {user?.isAuthenticated ? (
        <SocketContextProvider>
          <Main />
        </SocketContextProvider>
      ) : (
        <LandingPage />
      )}
    </AppWrapper>
  );
}

export default App;
