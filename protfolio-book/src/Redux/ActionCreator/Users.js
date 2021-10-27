import {
  SET_USERS,
  PUT_USERS,
  DELETE_USERS,
  FETCH_USERS,
} from "../Types/Users";

export const fetchUsers = () => {
  return {
    type: FETCH_USERS,
  };
};
export const setUsers = (payload) => {
  return {
    type: SET_USERS,
    payload,
  };
};
export const putUsers = (payload) => {
  return {
    type: PUT_USERS,
    payload,
  };
};
export const deleteUsers = (payload) => {
  return {
    type: DELETE_USERS,
    payload,
  };
};
