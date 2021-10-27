import { takeEvery, call, put } from "redux-saga/effects";
import { SET_USERS } from "../Types/Users";
import { setUsers } from "../Actions/Users";
import Api from "../../Api";

function* fetchUsers() {
  try {
    const users = yield call(Api.getUsers);
    debugger;
    console.log("123", users);
    yield put(setUsers(users));
  } catch (e) {}
}

export function* waitForFetchUsers() {
  yield takeEvery(SET_USERS, fetchUsers);
}
