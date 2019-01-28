import axios from "../config/axios";

export const getTopStories = () => {
  console.log("get top stories");
  const url = "/topstories.json?print=pretty";
  return axios.get(url).then(response => {
    console.log("topstories", response);
    return response.data;
  });
};

export const getItem = id => {
  console.log("get top stories");
  const url = `/item/${id}.json?print=pretty`;
  return axios.get(url).then(response => {
    //console.log("item", response);
    return response.data;
  });
};
