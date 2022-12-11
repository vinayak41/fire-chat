import { combineReducers } from "redux";
import conversationReducer from "./conversationReducer";
import userReducer from "./userReducer";
import connectedUsersReducer from "./connectedUsersReducer";

const rootReducer = combineReducers({
  user: userReducer,
  conversations: conversationReducer,
  connectedUsers: connectedUsersReducer,
});

export default rootReducer;
