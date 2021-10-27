import { SET_USERS } from "../Types/Users";

export const setUsers = (users = null) => {
  debugger;
  if (users) {
    return {
      type: SET_USERS,
      payload: users,
    };
  }
};
