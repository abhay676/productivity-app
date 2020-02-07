import { all } from "redux-saga/effects";
import AuthSaga from "components/Auth/saga";

export default function* mySaga() {
  yield all([AuthSaga()]);
}
