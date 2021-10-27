import { SET_USERS } from "../Types/Users";

export const usersInitialState = [];

const usersReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return [...action.payload];
    default:
      return state;
  }
};

export default usersReducer;
