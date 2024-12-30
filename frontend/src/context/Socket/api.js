import axios from "axios";
import { API_URL } from "../../constants";

const api = axios.create({
  baseURL: API_URL,
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = token; // Ensure "Bearer " prefix is included
  }
  return config;
});

export default api;
