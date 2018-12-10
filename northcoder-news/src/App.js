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
        {/* <Navbar topics={topics} /> */}
        <Router className="main">
          <Home path="/" />
          <Articles path="/:topic" />
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
    api.getTopics().then(topics => this.setState({ topics }));
  };
}

export default App;
