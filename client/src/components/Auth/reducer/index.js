import { LOGIN, REGISTER } from "../actions/types";

const initState = {
  user: {},
  login: false
};

export default function(state = initState, action) {
  switch (action.type) {
    case LOGIN:
      return Object.assign({}, state, {
        user: action.payload,
        login: true
      });
    case REGISTER:
      return Object.assign({}, state, {
        user: action.payload,
        login: true
      });

    default:
      return state;
  }
}
