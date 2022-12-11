import { UPDATE_CONNECTED_USERS } from "../typeConstants/conversationConstants";

export const updateConnectedUsers = (connectedUsers) => {
  return {
    type: UPDATE_CONNECTED_USERS,
    payload: { connectedUsers },
  };
};
