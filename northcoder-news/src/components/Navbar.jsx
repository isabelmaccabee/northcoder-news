import React, { Component } from "react";
import { Link } from "@reach/router";
import "../css/Navbar.css";
import * as utils from "../utils/index";

class Navbar extends Component {
  state = {
    showTopics: false
  };
  render() {
    const { topics } = this.props;
    const { showTopics } = this.state;
    return (
      <div className="nav">
        <div className="homeAndTopics">
          <Link to="/">Home</Link>
          <button className="showMoreButton" onClick={this.toggleShowTopics}>
            Show topics
          </button>
          {topics.map(({ slug }) => {
            return (
              <Link
                key={slug}
                to={`${slug}`}
                className={showTopics ? "visibleTopic" : "notVisibleTopic"}
              >
                {utils.capitaliseFirst(slug)}
              </Link>
            );
          })}
        </div>
        <div className="submitDiv">
          <Link to="/submit-topic" className="submitNav">
            Submit Topic
          </Link>
          <Link to="/submit-article" className="submitNav">
            Submit Article
          </Link>
        </div>
      </div>
    );
  }

  toggleShowTopics = e => {
    this.setState(prevState => {
      return { showTopics: !prevState.showTopics };
    });
  };
}

export default Navbar;
