import { all } from "redux-saga/effects";
import { waitForFetchUsers } from "./Redux/Sagas/Users";

export default function* rootSaga() {
  yield all([waitForFetchUsers()]);
}
