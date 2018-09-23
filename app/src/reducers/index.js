import { combineReducers } from 'redux';
import { sessionReducer } from 'redux-react-session';
import { routerReducer } from 'react-router-redux';
import userReducer from "./user";
import selectUserReducer from "./selectUser";

export default combineReducers({
  router: routerReducer,
  users: userReducer,
  selectedUser: selectUserReducer
});
