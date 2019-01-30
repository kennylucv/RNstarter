import axios from "../config/axios";

// this file holds all the api calls for hackerNews

export const getTopStories = () => {
  const url = "/topstories.json?print=pretty";
  return axios.get(url).then(response => {
    return response.data;
  });
};

export const getNewStories = () => {
  const url = "/newstories.json?print=pretty";
  return axios.get(url).then(response => {
    return response.data;
  });
};

export const getBestStories = () => {
  const url = "/beststories.json?print=pretty";
  return axios.get(url).then(response => {
    return response.data;
  });
};

export const getItem = id => {
  const url = `/item/${id}.json?print=pretty`;
  return axios.get(url).then(response => {
    return response.data;
  });
};
