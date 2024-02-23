import { getUserFailure, getUserSuccess } from "../slice/userSlice";
import API from "../utils/Apis";
import { takeLatest, put, call, all } from "redux-saga/effects";
import axios from "axios";

async function getUserData(payload) {
  const response = await axios
    .post("https://lawgic.onrender.com/api/v1/loginUser", payload)
    .then((result) => result.data)
    .catch((err) => {
      console.log(err);
    });
  return response;
  //   console.log(response, "this is response");
}

export function* loginUserSaga(action) {
  console.warn(action.payload);
  //   console.warn("u r in saga");
  const response = yield call(getUserData, action.payload);
  try {
    // console.warn("u r in try");
    console.log("main data=>>", response);
    if (response.success == true) {
      yield put(getUserSuccess(response));
    }
  } catch (e) {
    yield put(getUserFailure(e.message));
  }
}
