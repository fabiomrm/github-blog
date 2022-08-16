import axios from 'axios';

export const api = axios.create({
  baseURL: "https://api.github.com",
})

export const dogApi = axios.create({
  baseURL: "https://dogbreed-api.q9.com.br"
})