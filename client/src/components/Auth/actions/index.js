import { LOGIN_REQUEST, REGISTER_REQUEST } from "./types";

export const loginAction = credentials => {
  return {
    type: LOGIN_REQUEST,
    payload: credentials
  };
};

export const registerAction = credentials => {
  return {
    type: REGISTER_REQUEST,
    payload: credentials
  };
};
