import { put, takeLatest } from "redux-saga/effects";
import Cookies from "js-cookie";
import { loginRequest, loginSuccess, loginFailure } from "./loginSlice";

function* handleLogin() {
  try {
    const cookie = yield Cookies.get("user");
    const storedUserData = JSON.parse(cookie);
    console.log(storedUserData, "storedUserData");
    if (storedUserData) {
      yield put(loginSuccess(storedUserData));
    } else {
      yield put(loginFailure("User data not found in cookies"));
    }
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

function* loginSaga() {
  yield takeLatest(loginRequest.type, handleLogin);
}

export default loginSaga;
