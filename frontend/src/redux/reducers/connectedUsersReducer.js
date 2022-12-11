import { UPDATE_CONNECTED_USERS } from "../typeConstants/conversationConstants";

const initialState = [];

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CONNECTED_USERS:
      return action.payload.connectedUsers;
    default:
      return state;
  }
};
