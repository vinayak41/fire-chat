import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { CONVERSATION_API } from "../../utils/api";
import { setPreviousConversations } from "../actions/conversationActions";
import { GET_PREVIOUS_CONVERSATIONS } from "../typeConstants/conversationConstants";

function* getPreviousConversations() {
  try {
    const token = localStorage.getItem("user-token");
    console.log(token);
    const response = yield call(axios, {
      method: "GET",
      url: `${CONVERSATION_API}`,
      headers: { Authorization: `Bearer ${token}` },
    });
    yield put(setPreviousConversations(response.data));
  } catch {}
}

export default function* conversationSaga() {
  yield takeEvery(GET_PREVIOUS_CONVERSATIONS, getPreviousConversations);
}
