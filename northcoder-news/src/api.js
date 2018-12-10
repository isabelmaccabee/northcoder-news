import axios from "axios";

const BASE_URL = "https://isabel-nc-knews.herokuapp.com/api";

export const getTopics = async () => {
  const { data } = await axios.get(
    `https://isabel-nc-knews.herokuapp.com/api/topics/`
  );
  return data.topics;
};

export const getArticles = async () => {
  const { data } = await axios.get(`${BASE_URL}/articles`);
  return data.articles;
};

export const getTopTen = async () => {
  console.log("hi");
};
