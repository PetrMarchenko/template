import {LOAD_USER_STORE, EDIT_USER_STORE} from './actions';

const INIT = {
  users: [],
};

export default function usersReducer(state = INIT, action) {
  const { type, payload } = action;

  switch (type) {
    case LOAD_USER_STORE:
      return {
        ...state,
        users: payload
      };
    case EDIT_USER_STORE:
      const data = [...state.users];
      let foundIndex = data.findIndex(element => element.id === payload.id);
      const item = { ...data[foundIndex], ...payload };
      data.splice(foundIndex, 1, item);

      return {
        ...state,
        users: data
      };
    default:
      return state;
  }
}

