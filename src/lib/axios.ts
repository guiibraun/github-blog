import axios from 'axios'

const API_TOKEN = import.meta.env.VITE_API_TOKEN_GITHUB

export const api = axios.create({
  baseURL: 'https://api.github.com/',
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
})
