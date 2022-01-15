import React, { useEffect, useState } from "react";
import ChatBox from "./ChatBox";
import ChatList from "./ChatList";
import socket from "../socket.io";
import { useDispatch, useSelector } from "react-redux";
import { newMessageReceived, setPreviousConversations } from "../redux/actions/conversationActions";

const Main = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.user.username);
  const [conversationPartner, setConversationPartner] = useState(null);

  useEffect(() => {
    socket.on("new_message", (payload) => {
      dispatch(newMessageReceived(payload));
    });
    socket.on("previous_conversations", (payload) => {
      const conversations  = payload.map((conversation) => ({
        partner: conversation.senderReceiver.filter(
          (_username) => _username !== username
        )[0],
        messages: conversation.messages
      }));
      dispatch(setPreviousConversations(conversations))
    });
  }, []);

  useEffect(() => {
    socket.emit("user_connected", { username });
  }, []);
  return (
    <>
      <ChatList
        conversationPartner={conversationPartner}
        setConversationPartner={setConversationPartner}
      />
      <ChatBox conversationPartner={conversationPartner} />
    </>
  );
};

export default Main;
