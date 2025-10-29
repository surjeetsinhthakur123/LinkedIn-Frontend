import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://linkedin-backend-161k.onrender.com/api/v1",
  withCredentials: true,
});
