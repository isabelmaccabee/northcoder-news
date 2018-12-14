import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import UserIndicator from "./components/UserIndicator";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import * as api from "./api";
import Main from "./components/Main";
import Auth from "./components/Auth";
import { Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";

class App extends Component {
  state = {
    topics: [],
    user: null,
    isLoading: true
  };

  render() {
    const { topics, isLoading, user } = this.state;
    return (
      <AlertProvider template={AlertTemplate}>
        <Auth user={user} setUser={this.setUser}>
          <div className="App">
            <Header />
            <UserIndicator user={user} />
            {isLoading ? (
              <div className="nav">
                <p>...</p>
              </div>
            ) : (
              <Navbar topics={topics} />
            )}
            <Main user={user} topics={topics} />
            <Sidebar user={user} />
            <Footer />
          </div>
        </Auth>
      </AlertProvider>
    );
  }

  componentDidMount() {
    this.fetchTopics();
  }

  fetchTopics = () => {
    api.getTopics().then(topics => this.setState({ topics, isLoading: false }));
  };

  setUser = loginCredentials => {
    this.setState({ user: loginCredentials });
  };
}

export default App;
