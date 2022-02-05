import { fork, all } from "redux-saga/effects";
// import noteSaga from "./noteSaga";
import userSaga from "./userSaga";

export default function* rootSaga() {
    yield all([
        // fork(noteSaga),
        fork(userSaga)
    ]);
}