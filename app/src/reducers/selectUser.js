import { USER_SELECTED} from '../actions/types';
import { createReducer } from '../utils/reducer';

const selectUsr = (state, action) => {
  return action.selectedUser;
}
//handlers
const handlers = {
  USER_SELECTED: selectUsr,
};

export default createReducer({}, handlers);
