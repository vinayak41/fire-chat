import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../typeConstants/userTypeConstants";

// const initialState = { isAuthenticated: false, message: {type: "error", text: "message here"} };
const initialState = { isAuthenticated: false, message: null };

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        message: null,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticated: true,
        message: null,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        message: { type: "error", text: action.payload },
      };
    case REGISTER_REQUEST: 
      return {
        ...state,
        message: null
      }
    case REGISTER_FAILED:
      return {
        ...state,
        message: { type: "error", text: action.payload },
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        message: { type: "success", text: "User registration Successful! Please login"}
      }
    default:
      return state;
  }
};
