import {
  CREATE_NEW_CONVERSATION,
  GET_PREVIOUS_CONVERSATIONS,
  NEW_MESSAGE_RECEIVED,
  NEW_MESSAGE_SENT,
  SET_PREVIOUS_CONVERSATIONS,
} from "../typeConstants/conversationConstants";

export const newMessageReceived = (message) => {
  return {
    type: NEW_MESSAGE_RECEIVED,
    payload: message,
  };
};

export const newMessageSent = (message) => {
  return {
    type: NEW_MESSAGE_SENT,
    payload: message,
  };
};

export const getPreviousConversations = () => {
  return {
    type: GET_PREVIOUS_CONVERSATIONS,
  };
};

export const setPreviousConversations = (conversations) => {
  return {
    type: SET_PREVIOUS_CONVERSATIONS,
    payload: conversations,
  };
};

export const createNewConversation = (reciver) => {
  return {
    type: CREATE_NEW_CONVERSATION,
    payload: reciver,
  };
};
