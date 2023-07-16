import axios from "axios";

const Axios = axios.create({
  baseURL: process.env.REACT_APP_MAIN_URL,
});

Axios.interceptors.request.use((data) => {
  const token = localStorage.getItem("token");

  if (token) {
    data.headers.Authorization = `Bearer ${token}`;
  }

  return data;
});

Axios.interceptors.response.use((response) => {
  if (response.data.token) {
    localStorage.setItem("token", response.data.token);
  }

  return response;
});

export default Axios;
