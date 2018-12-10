import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import UserIndicator from "./components/UserIndicator";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import { Router } from "@reach/router";
import * as api from "./api";
import Articles from "./components/Articles";

class App extends Component {
  state = {
    topics: []
  };

  render() {
    const { topics } = this.state;
    return (
      <div className="App">
        <Header />
        <UserIndicator />
        <Navbar topics={topics} />
        <Router className="main">
          <Articles path="/" />
          <Articles path="/:topic" />
        </Router>
        <Router className="sidebar">
          <Sidebar path="/" />
          <Sidebar path="/:topic" />
        </Router>
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    api.getTopics().then(topics => this.setState({ topics }));
  };
}

export default App;
