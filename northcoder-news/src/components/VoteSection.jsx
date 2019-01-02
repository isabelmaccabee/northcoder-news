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
    const buttonValue = +event.target.value;
    const voteNum =
      buttonValue === this.state.voteChange ? buttonValue * -1 : buttonValue;
    api
      .updateVotes(this.props.article_id, voteNum, this.props.comment_id)
      .then()
      .catch();
    this.setState(prevState => ({
      voteChange: prevState.voteChange + voteNum
    }));
  };
}

export default VoteSection;
