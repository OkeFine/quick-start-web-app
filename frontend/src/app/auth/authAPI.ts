import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export function authLogin(payload: { email: string; password: string }) {
  return axios.post(`${API_URL}/auth/login`, { ...payload });
}

export function authToken(token: string) {
  return axios.post(
    `${API_URL}/auth/token`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
  );
}
