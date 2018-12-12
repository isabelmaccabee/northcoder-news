import React, { Component } from "react";
import * as api from "../api";
import "../css/VoteSection.css";

class VoteSection extends Component {
  state = {
    voteChange: 0
  };

  render() {
    const { voteChange } = this.state;
    const { votes, type } = this.props;
    return (
      <div
        className={
          type === "article" ? "voteSection articleVotes" : "voteSection"
        }
      >
        <button
          onClick={this.handleClick}
          value="1"
          className={voteChange === 1 ? "pressed up" : "unpressed"}
        >
          vote
          <br /> UP
        </button>
        <p>Votes: {votes + voteChange}</p>
        <button
          onClick={this.handleClick}
          value="-1"
          className={voteChange === -1 ? "pressed down" : "unpressed"}
        >
          vote DOWN
        </button>
      </div>
    );
  }

  handleClick = event => {
    const voteNum =
      +event.target.value === this.state.voteChange
        ? +event.target.value * -1
        : +event.target.value;
    api
      .updateVotes(this.props.article_id, voteNum, this.props.comment_id)
      .then()
      .catch(console.log);
    this.setState({
      voteChange: +event.target.value === voteNum ? voteNum : 0
    });
  };
}

export default VoteSection;
