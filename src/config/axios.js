import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://hacker-news.firebaseio.com/v0",
  headers: {
    "Access-Control-Allow-Origin": "*"
  }
});

export default axiosInstance;
