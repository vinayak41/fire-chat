import React, { useEffect, useState } from "react";
import ChatBox from "./ChatBox";
import ChatList from "./ChatList";
import { useDispatch, useSelector } from "react-redux";
import {
  getPreviousConversations,
  newMessageReceived,
  setPreviousConversations,
} from "../redux/actions/conversationActions";
import useWindowDimensions from "../hooks/useWindowDimensions";
import { useContext } from "react";
import SocketContext from "../Context/Socket";

const Main = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);
  const [conversationPartner, setConversationPartner] = useState(null);
  const { height, width } = useWindowDimensions();
  const isMobile = width < 520;
  const socket = useContext(SocketContext);


  useEffect(() => {
    dispatch(getPreviousConversations())
    socket.on("new_message", (payload) => {
      dispatch(newMessageReceived(payload));
    });
    // socket.on("previous_conversations", (payload) => {
    //   const conversations = payload.map((conversation) => ({
    //     partner: conversation.senderReceiver.filter(
    //       (_username) => _username !== username
    //     )[0],
    //     messages: conversation.messages,
    //   }));
    //   dispatch(setPreviousConversations(conversations));
    // });
    socket.on("new_user_connect", (payload) => {});
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
