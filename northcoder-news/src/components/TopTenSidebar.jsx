import React, { Component } from "react";
import * as api from "../api";

class TopTenSidebar extends Component {
  state = {
    top10: [],
    isLoading: true
  };

  render() {
    const { isLoading } = this.state;
    if (isLoading) return <p>...</p>;
    return <p>Hello</p>;
  }

  componentDidMount() {
    this.fetchTopTen();
  }

  fetchTopTen = () => {
    api.getTopTen().then(ranking => console.log(ranking));
  };
}

export default TopTenSidebar;
