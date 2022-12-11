import React, { useEffect, useState } from "react";
import ChatBox from "./ChatBox";
import ChatList from "./ChatList";
import { useDispatch, useSelector } from "react-redux";
import {
  getPreviousConversations,
  newMessageReceived,
} from "../redux/actions/conversationActions";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useContext } from "react";
import SocketContext from "../Context/Socket";
import { updateConnectedUsers } from "../redux/actions/connectedUsresActions";

const Main = () => {
  const dispatch = useDispatch();
  const [conversationPartner, setConversationPartner] = useState(null);
  const { width } = useWindowDimensions();
  const isMobile = width < 520;
  const socket = useContext(SocketContext);

  useEffect(async () => {
    await dispatch(getPreviousConversations());
    socket.on("new_message", (payload) => {
      dispatch(newMessageReceived(payload));
    });
    socket.on("connected_users", (connectedUsers) => {
      dispatch(updateConnectedUsers(connectedUsers));
    });
  }, []);

  return (
    <>
      <ChatList
        conversationPartner={conversationPartner}
        setConversationPartner={setConversationPartner}
      />
      {isMobile && !conversationPartner ? null : (
        <ChatBox
          conversationPartner={conversationPartner}
          setConversationPartner={setConversationPartner}
          isMobile={isMobile}
        />
      )}
    </>
  );
};

export default Main;
