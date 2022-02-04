import { put, takeEvery, call } from "redux-saga/effects";
import {
  GET_ALL_USERS,
  LOGIN_REQUEST,
  REGISTER_REQUEST,
} from "../typeConstants/userTypeConstants";
import axios from "axios";
import { USER_API } from "../../utils/api";
import {
  loginFailed,
  loginSuccess,
  registerFailed,
  registerSuccess,
  setAllUsers,
} from "../actions/userActions";

function* login(action) {
  try {
    const response = yield call(axios, {
      method: "POST",
      url: `${USER_API}/login`,
      data: action.payload,
    });
    yield put(loginSuccess(response.data));
    yield call(localStorage.setItem("user-token", response.data.token));
  } catch (error) {
    yield put(loginFailed(error?.response?.data?.message));
  }
}

function* register(action) {
  try {
    const response = yield call(axios, {
      method: "POST",
      url: `${USER_API}/register`,
      data: action.payload,
    });
    yield put(registerSuccess());
  } catch (error) {
    yield put(registerFailed(error.response.data.message));
  }
}

function* getAllUsers() {
  try {
    const response = yield call(axios, {
      method: "GET",
      url: `${USER_API}`,
    });
    yield put(setAllUsers(response.data))
  } catch (error) {
    console.log(error);
  }
}

export default function* userSaga() {
  yield takeEvery(LOGIN_REQUEST, login);
  yield takeEvery(REGISTER_REQUEST, register);
  yield takeEvery(GET_ALL_USERS, getAllUsers);
}
