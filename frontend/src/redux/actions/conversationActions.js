import { NEW_MESSAGE_RECEIVED, NEW_MESSAGE_SENT, SET_PREVIOUS_CONVERSATIONS } from "../typeConstants/conversationConstants"

export const newMessageReceived = (message) => {
  return {
    type: NEW_MESSAGE_RECEIVED,
    payload: message
  }
}

export const newMessageSent = (message) => {
  return {
    type: NEW_MESSAGE_SENT,
    payload: message
  }
}

export const setPreviousConversations = (conversations) => {
  return {
    type: SET_PREVIOUS_CONVERSATIONS,
    payload: conversations,
  }
}