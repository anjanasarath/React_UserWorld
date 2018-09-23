import { ADD_USER} from '../actions/types';
import { createReducer } from '../utils/reducer';

const addUser = (state={}, action) => {
  return [...state,action.newUser];
}

//handlers
const handlers = {
  ADD_USER: addUser,
};
export default createReducer({}, handlers);
