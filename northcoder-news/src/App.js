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
import Topic from "./components/Topic";
import Article from "./components/Article";

class App extends Component {
  state = {
    topics: [],
    isLoading: true
  };

  render() {
    const { topics, isLoading } = this.state;
    return (
      <div className="App">
        <Header />
        <UserIndicator />
        {isLoading ? (
          <div className="nav">
            <p>...</p>
          </div>
        ) : (
          <Navbar topics={topics} />
        )}
        <Router className="main">
          <Home path="/" />
          <Topic path="/:topic" />
          <Article path="/:topic/:article_id" />
        </Router>
        <Sidebar />
        <Footer />
      </div>
    );
  }

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    api.getTopics().then(topics => this.setState({ topics, isLoading: false }));
  };
}

export default App;
