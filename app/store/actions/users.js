import {USER_REMOVE} from '../constants';

export function removeUser(user) {
  return {
    type: USER_REMOVE,
    payload: user,
  };
}
