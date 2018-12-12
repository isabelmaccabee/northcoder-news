import React, { Component } from "react";

class QueryButtons extends Component {
  state = {
    sort_by: "created_at"
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="sortByDropdown">Sort by:</label>
          <select id="sortByDropdown" onChange={this.handleChange}>
            <option value="created_at">Date</option>
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="votes">Votes</option>
            <option value="comments">Comments</option>
          </select>
          <button onClick={this.handleClick} />
        </form>
      </div>
    );
  }
  handleChange = event => {
    event.preventDefault();
    this.setState({ sort_by: event.target.value });
  };

  handleClick = event => {
    event.preventDefault();
    this.props.fetchArticles(this.props.topic, this.state.sort_by);
  };
}

export default QueryButtons;
