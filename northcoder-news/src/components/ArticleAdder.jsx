import React, { Component } from "react";
import * as utils from "../utils";

class ArticleAdder extends Component {
  render() {
    const { user, topics } = this.props;
    return (
      <div>
        <form>
          <label>Title</label>
          <input type="text" />
          <label>Write your article here</label>
          <input type="text" />
          <select>
            <option>Select a topic</option>
            {topics.map(({ slug }) => {
              return <option key={slug}>{utils.capitaliseFirst(slug)}</option>;
            })}
          </select>
          <button>
            Submit as <strong>{user.username}</strong>
          </button>
        </form>
      </div>
    );
  }
}

export default ArticleAdder;
