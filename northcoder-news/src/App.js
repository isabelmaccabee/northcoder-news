import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import UserIndicator from "./components/UserIndicator";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import * as api from "./api";

import Main from "./components/Main";

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
        <Main />
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
