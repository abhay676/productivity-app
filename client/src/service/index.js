import axios from "axios";

const URL = "http://localhost:8000";

// Network requests

// Auth request
export function loginService(info) {
  return axios.post(`${URL}/login`, info);
}

export function registerService(info) {
  return axios.post(`${URL}/new-user`, info);
}
