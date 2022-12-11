import { useMemo } from "react";
import { createContext } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { SOCKET_URL } from "../utils/config";

const SocketContext = createContext();
export default SocketContext;

export const SocketContextProvider = ({ children }) => {
  const user = useSelector((state) => state.user);
  const socket = useMemo(
    () => io(SOCKET_URL, { query: { username: user.username } }),
    []
  );
  return (
    <SocketContext.Provider value={socket}>{children}</SocketContext.Provider>
  );
};
