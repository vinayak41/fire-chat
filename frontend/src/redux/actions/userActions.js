import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
} from "../typeConstants/userTypeConstants";

export const loginRequest = (data) => {
  return {
    type: LOGIN_REQUEST,
    payload: data,
  };
};

export const loginSuccess = (token) => {
  return {
    type: LOGIN_SUCCESS,
    payload: token,
  };
};

export const loginFailed = (errorMessage) => {
  return {
    type: LOGIN_FAILED,
    payload: errorMessage,
  };
};

export const registerRequest = (data) => {
  return {
    type: REGISTER_REQUEST,
    payload: data,
  };
};

export const registerSuccess = () => {
  return {
    type: REGISTER_SUCCESS,
  };
};

export const registerFailed = (errorMessage) => {
  return {
    type: REGISTER_FAILED,
    payload: errorMessage,
  };
};
