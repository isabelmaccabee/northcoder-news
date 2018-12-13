import React, { Component } from "react";

class QueryButtons extends Component {
  state = {
    sort_by: "created_at",
    sort_ascending: false
  };

  render() {
    return (
      <div>
        <form>
          <label htmlFor="sortByQuery">Sort by:</label>
          <select
            id="sortByQuery"
            onChange={this.handleChange}
            className="sort_by"
          >
            <option value="created_at">Date</option>
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="votes">Votes</option>
            <option value="comments">Comments</option>
          </select>
          <label htmlFor="sort_ascTrue">Ascending</label>
          <input
            type="radio"
            value="true"
            name="sort_asc"
            id="sort_ascTrue"
            onChange={this.handleChange}
            className="sort_ascending"
          />
          <label htmlFor="sort_ascFalse">Descending</label>
          <input
            type="radio"
            value="false"
            name="sort_asc"
            id="sort_ascFalse"
            onChange={this.handleChange}
            className="sort_ascending"
          />
          <button onClick={this.handleClick}>Give me articles!</button>
        </form>
      </div>
    );
  }

  handleClick = event => {
    event.preventDefault();
    const { sort_by, sort_ascending } = this.state;
    this.props.fetchArticles(this.props.topic, sort_by, sort_ascending);
  };

  handleChange = event => {
    const { className, value } = event.target;
    this.setState({ [className]: value });
  };
}

export default QueryButtons;
