import {combineReducers} from "redux"
import conversationReducer from "./conversationReducer";
import userReducer from "./userReducer"
const rootReducer = combineReducers({
  user: userReducer,
  conversations: conversationReducer
})

export default rootReducer;