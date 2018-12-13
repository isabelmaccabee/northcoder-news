import React, { Component } from "react";
import * as utils from "../utils";
import * as api from "../api";
import { navigate } from "@reach/router";

class ArticleAdder extends Component {
  state = {
    titleInput: "",
    bodyInput: "",
    topicInput: null,
    submitPressed: false
  };

  render() {
    const { user, topics } = this.props;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="titleInput">Title</label>
          <input
            type="text"
            id="titleInput"
            onChange={this.handleChange}
            required
          />
          <label htmlFor="bodyInput">Write your article here</label>
          <input
            type="text"
            id="bodyInput"
            onChange={this.handleChange}
            required
          />
          <label htmlFor="topicInput">Topic:</label>
          <select id="topicInput" onChange={this.handleChange} required>
            <option value="">Select a topic</option>
            {topics.map(({ slug }) => {
              return (
                <option key={slug} value={slug}>
                  {utils.capitaliseFirst(slug)}
                </option>
              );
            })}
          </select>
          <button type="submit">
            Submit as <strong>{user.username}</strong>
          </button>
        </form>
        {this.state.submitPressed && <p>Posting article !</p>}
      </div>
    );
  }

  handleChange = event => {
    event.preventDefault();
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { titleInput, bodyInput, topicInput } = this.state;
    api
      .postArticle(this.props.user.user_id, titleInput, bodyInput, topicInput)
      .then(article => {
        navigate(`/articles/${article.article_id}`);
      })
      .catch(err => {
        console.log(err);
      });
    this.setState({ submitPressed: true });
  };
}

export default ArticleAdder;
