import { put, takeLatest, call } from "redux-saga/effects";
import { loginService, registerService } from "service/index";
import {
  LOGIN,
  LOGIN_REQUEST,
  REGISTER,
  REGISTER_REQUEST
} from "../actions/types";

function* loginSaga(info) {
  const { payload } = info;
  try {
    const response = yield call(loginService, payload);
    const { data } = response;
    localStorage.setItem("token", data.token);
    yield put({ type: LOGIN, payload: data });
    //TODO:  Redirecting to the Dashboard
  } catch (error) {
    console.error(error);
  }
}

function* registerSaga(info) {
  const { payload } = info;
  try {
    const response = yield call(registerService, payload);
    const { data } = response;
    localStorage.setItem("token", data.token);
    yield put({ type: REGISTER, payload: data });
    //TODO:  Redirecting to the Dashboard
  } catch (error) {
    console.error(error);
  }
}

export default function* actionWatcher() {
  yield takeLatest(LOGIN_REQUEST, loginSaga);
  yield takeLatest(REGISTER_REQUEST, registerSaga);
}
