import {
  CREATE_NEW_CONVERSATION,
  NEW_MESSAGE_RECEIVED,
  NEW_MESSAGE_SENT,
  SET_PREVIOUS_CONVERSATIONS,
} from "../typeConstants/conversationConstants";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case NEW_MESSAGE_RECEIVED:
      var conversationExists = state.find(
        (conversation) => conversation.partner === action.payload.sender
      );
      if (conversationExists) {
        return state.map((conversation) => {
          return conversation.partner === action.payload.sender
            ? {
                ...conversation,
                messages: [...conversation.messages, action.payload],
              }
            : conversation;
        });
      } else {
        return [
          ...state,
          { partner: action.payload.sender, messages: [action.payload] },
        ];
      }
    case NEW_MESSAGE_SENT:
     var conversationExists = state.find(
        (conversation) => conversation.partner === action.payload.receiver
      );
      if(conversationExists) {
        return state.map((conversation) => {
          return conversation.partner === action.payload.receiver
            ? {
                ...conversation,
                messages: [...conversation.messages, action.payload],
              }
            : conversation;
        });
      } else {
        return [
          ...state,
          { partner: action.payload.receiver, messages: [action.payload] },
        ];
      }
    case SET_PREVIOUS_CONVERSATIONS:
      return action.payload
    case CREATE_NEW_CONVERSATION:
      return [...state, {partner: action.payload, messages: []}]
    default:
      return state;
  }
};
