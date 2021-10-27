import { all } from "redux-saga/effects";
import { waitForFetchUsers } from "./Redux/sagas/Users";

export default function* rootSaga() {
  yield all([waitForFetchUsers()]);
}
