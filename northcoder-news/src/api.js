import axios from "axios";

const BASE_URL = "https://isabel-nc-knews.herokuapp.com/api";

export const getTopics = async () => {
  const { data } = await axios.get(
    `https://isabel-nc-knews.herokuapp.com/api/topics/`
  );
  return data.topics;
};

export const getArticles = async topic => {
  const URL = topic
    ? `${BASE_URL}/topics/${topic}/articles`
    : `${BASE_URL}/articles`;
  const { data } = await axios.get(`${URL}`);
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
