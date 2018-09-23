import { USER_SELECTED, ADD_USER } from './types';

export const select_user_action = (user) => {
  return {
    type: USER_SELECTED,
    selectedUser: user,
  };
}

export const add_user_action = (user) => {
  return {
    type: ADD_USER,
    newUser: user,
  };
}
