import { useEffect } from "react";
import styled from "styled-components";
import LandingPage from "./components/LandingPage";
import {useSelector} from "react-redux"
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
import { setUser } from "./redux/actions/userActions";
import Main from "./components/Main";

const AppWrapper = styled.div`
  display: flex;
`;

function App() {
  const dispatch = useDispatch();
  const user = useSelector( state => state.user)
  console.log(user)

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
        <Main />
      ) : (
        <LandingPage />
      )}
    </AppWrapper>
  );
}

export default App;
