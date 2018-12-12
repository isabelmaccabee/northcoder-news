import React, { Component } from "react";

class VoteSection extends Component {
  state = {};

  render() {
    return (
      <>
        <button id="upVote" onClick={this.handleClick} value="1">
          vote
        </button>
        <p>Votes:</p>
        <p>{this.props.component_id}</p>
        <button id="downVote" onClick={this.handleClick} value="-1">
          vote
        </button>
      </>
    );
  }

  handleClick = event => {
    console.log(+event.target.value);
  };
}

export default VoteSection;
