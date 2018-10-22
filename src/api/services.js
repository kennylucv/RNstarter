import axios from "../config/axios";

export const testService = id => {
  const url = "/testService?id=" + id;
  return axios.get(url).then(response => {
    console.log("testService", response);
    return response.data;
  });
};
