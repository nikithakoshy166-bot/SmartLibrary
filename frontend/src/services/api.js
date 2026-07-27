import axios from "axios";

const api = axios.create({
  baseURL: "https://smartlibrary-backend-7rip.onrender.com",
});

export default api;