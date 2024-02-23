import { takeLatest, put, call, all } from "redux-saga/effects";
import { getUserFetch, logoutFetch } from "../slice/userSlice";
import { loginUserSaga } from "../saga/loginUserSaga";
import { logoutSaga } from "../saga/logoutSaga";

export default function* sagas() {
  yield takeLatest(getUserFetch.type, loginUserSaga);
  yield takeLatest(logoutFetch.type, logoutSaga);
}
