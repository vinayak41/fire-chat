import { put, takeEvery, call } from "redux-saga/effects";
import { LOGIN_REQUEST, REGISTER_REQUEST } from "../typeConstants/userTypeConstants";
import axios from "axios";
import { USER_API } from "../../utils/api";
import { loginFailed, loginSuccess, registerFailed, registerSuccess } from "../actions/userActions";

function* login(action) {
  try {
    const response = yield call(axios, {
      method: "POST",
      url: `${USER_API}/login`,
      data: action.payload,
    });
    yield put(loginSuccess(response.data.token));
  } catch (error) {
    yield put(loginFailed(error.response.data.message))
  }
}

function* register(action) {
  try {
    const response = yield call(axios, {
      method: "POST",
      url: `${USER_API}/register`,
      data: action.payload
    })
    yield put(registerSuccess())
  } catch (error) {
    yield put(registerFailed(error.response.data.message));
  }
}

export default function* userSaga() {
  yield takeEvery(LOGIN_REQUEST, login);
  yield takeEvery(REGISTER_REQUEST, register)
}
