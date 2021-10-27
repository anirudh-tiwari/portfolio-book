import { takeEvery, call, put } from "redux-saga/effects";
import { FETCH_USERS } from "../Types/Users";
import { setUsers } from "../ActionCreator/Users";
import Api from "../../Api";

function* fetchUsers() {
  try {
    const users = yield call(Api.getUsers);
    yield put(setUsers(users.data));
  } catch (e) {
    console.log("error==>", e);
  }
}

export function* waitForFetchUsers() {
  yield takeEvery(FETCH_USERS, fetchUsers);
}
