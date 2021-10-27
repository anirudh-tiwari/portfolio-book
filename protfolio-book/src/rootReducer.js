import { combineReducers } from "redux";
import usersReducer from "./Redux/Reducers/Users";

const rootReducer = combineReducers({
  users: usersReducer,
});

export default rootReducer;
