import React, { Component } from "react";
import * as api from "../api";
import { navigate } from "@reach/router";

class TopicAdder extends Component {
  state = {
    slugInput: "",
    descInput: "",
    submitPressed: false
  };

  render() {
    return (
      <div>
        <h2>Submit a topic</h2>
        <form onSubmit={this.handleSubmit} className="articleAdder">
          <label htmlFor="slugInput">New topic</label>
          <input
            type="text"
            id="slugInput"
            onChange={this.handleChange}
            required
          />
          <label htmlFor="descInput">Description</label>
          <input
            type="text"
            id="descInput"
            onChange={this.handleChange}
            required
          />
          <button type="submit">
            Submit as <strong>{this.props.user.username}</strong>
          </button>
        </form>
        {this.state.submitPressed && <p>Posting topic now !</p>}
      </div>
    );
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({ [id]: value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { user } = this.props;
    api
      .postTopic(this.state.slugInput, this.state.descInput)
      .then(topic => {
        const { user_id } = user;
        const title = "First article";
        const body =
          "This is a new topic, contribute and help us out by writing articles";
        const slug = topic.slug;
        return Promise.all([
          api.postArticle(user_id, title, body, slug),
          topic
        ]);
      })
      .then(array => {
        const topic = array[1].slug;
        navigate(`/${topic}`);
      })
      .catch(err => {
        this.props.alert.error(
          "Oh no! Unsuccessful topic submission, refresh and try again?"
        );
      });
    this.setState({ submitPressed: true });
  };
}

export default TopicAdder;
