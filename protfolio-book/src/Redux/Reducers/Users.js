import { SET_USERS, PUT_USERS, DELETE_USERS } from "../Types/Users";

export const usersInitialState = {
  data: [],
};

const usersReducer = (state = usersInitialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        data: action.payload,
      };
    case DELETE_USERS:
      return {
        ...state,
        data: state.data.filter((user) => user.id !== action.payload.id),
      };
    case PUT_USERS:
      return {
        ...state,
        data: state.data.map((user) => {
          debugger;
          return user.id === action.payload.id ? action.payload : user;
        }),
      };
    default:
      return state;
  }
};

export default usersReducer;
