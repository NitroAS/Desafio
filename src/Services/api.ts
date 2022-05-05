import axios from "axios";

export const apiDesafio = axios.create({
    baseURL: 'https://626d81a7e58c6fabe2d64e36.mockapi.io/',
    headers: {'Content-Type': 'application/Json'}
  });