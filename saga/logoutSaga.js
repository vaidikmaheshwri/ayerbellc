// import { logoutFetch, logoutSucess } from "../slice/userSlice";

import { takeLatest, put, call, all } from "redux-saga/effects";
import axios from "axios";
import { useSelector } from "react-redux";
import { logoutSuccess } from "../slice/userSlice";

// async function logoutApi(userId) {
//   const response = await axios
//     .post("https://lawgic.onrender.com/api/v1/logout", userId)
//     .then((result) => console.log("result",result))
//     .catch((e) => console.log(e.message));
//   return response;
// }

export function* logoutSaga(action) {
  const userId = action.payload;

  console.log("u r in logout saga", action.payload);
  const response = yield call(() => axios.post("https://lawgic.onrender.com/api/v1/logout", action.payload));

  try {
    console.log("logoutSaga=>>>>>", response);
    if (response.status == 200) {
      yield put(logoutSuccess("fhsdl"));
      //   console.log("accessToken in saga", accessToken);
    }
  } catch (e) {
    console.log(e);
  }
}
