import {
  GET_ALL_USERS,
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  REGISTER_FAILED,
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  SET_ALL_USERS,
  SET_USER,
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

export const setUser = (username) => {
  return {
    type: SET_USER,
    payload: username,
  };
};

export const getAllUsers = () => {
  return {
    type: GET_ALL_USERS,
  };
};

export const setAllUsers = (users) => {
  return {
    type: SET_ALL_USERS,
    payload: users,
  };
};
