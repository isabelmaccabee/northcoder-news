import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header";
import UserIndicator from "./components/UserIndicator";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Sidebar from "./components/Sidebar";
import { Router } from "@reach/router";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <UserIndicator />
        <Navbar />
        <Router className="main">
          <Home path="/" />
        </Router>
        <Router className="sidebar">
          <Sidebar path="/" />
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
