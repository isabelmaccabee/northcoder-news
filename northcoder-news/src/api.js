import axios from "axios";
import * as utils from "./utils/index";

const BASE_URL = "https://isabel-nc-knews.herokuapp.com/api";

export const getTopics = async () => {
  const { data } = await axios.get(
    `https://isabel-nc-knews.herokuapp.com/api/topics/`
  );
  return data.topics;
};

export const getArticles = async (topic, sort_by, sort_ascending, page = 1) => {
  let URL = topic
    ? `${BASE_URL}/topics/${topic}/articles?p=${page}`
    : `${BASE_URL}/articles?p=${page}`;
  URL = sort_by ? `${URL}?sort_by=${sort_by}` : URL;
  URL = sort_ascending ? `${URL}?sort_ascending=${sort_ascending}` : URL;
  const withoutQs = utils.changeQmarkToAmp(URL);
  console.log(withoutQs);
  const { data } = await axios.get(withoutQs);
  return data.articles;
};

export const getTopTen = async () => {
  const { data } = await axios.get(`${BASE_URL}/articles?sort_by=votes`);
  return data.articles;
};

export const getOneArticle = async article_id => {
  const { data } = await axios.get(`${BASE_URL}/articles/${article_id}`);
  return data.article;
};

export const getComments = async article_id => {
  const { data } = await axios.get(
    `${BASE_URL}/articles/${article_id}/comments`
  );
  return data.comments;
};

export const getUserDetails = async username => {
  const { data } = await axios.get(`${BASE_URL}/users/${username}`);
  const response = data.user ? data.user : data.message;
  return response;
};

export const updateVotes = async (article_id, voteNum, comment_id) => {
  const URL = comment_id
    ? `${BASE_URL}/articles/${article_id}/comments/${comment_id}`
    : `${BASE_URL}/articles/${article_id}/`;
  await axios.patch(URL, {
    inc_votes: voteNum
  });
};

export const postComment = async (article_id, body, user_id) => {
  const { data } = await axios.post(
    `${BASE_URL}/articles/${article_id}/comments`,
    { user_id, body }
  );
  return data.comment;
};

export const deleteElement = async (article_id, comment_id) => {
  const URL = comment_id
    ? `${BASE_URL}/articles/${article_id}/comments/${comment_id}`
    : `${BASE_URL}/articles/${article_id}`;
  await axios.delete(URL);
};

export const postArticle = async (user_id, title, body, topic) => {
  const newArticle = { user_id, title, body };
  const URL = `${BASE_URL}/topics/${topic}/articles`;
  const { data } = await axios.post(URL, newArticle);
  return data.article;
};

export const postTopic = async (slug, description) => {
  const newTopic = {
    slug: slug.toLowerCase(),
    description
  };
  const { data } = await axios.post(`${BASE_URL}/topics`, newTopic);
  return data.topic;
};
