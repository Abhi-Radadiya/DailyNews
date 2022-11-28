import "./App.css";
import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

export default class extends Component {
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
          <Route path="/" element={<News country="in" category="general" />} />
            </Routes>
          <Routes>
          <Route path="/technology" element={<News country="in" category="technology" />} />
            </Routes>
          <Routes>
          <Route path="/science" element={<News country="in" category="science" />} />
            </Routes>
          <Routes>
          <Route path="/health" element={<News country="in" category="health" />} />
            </Routes>
          <Routes>
          <Route path="/sports" element={<News country="in" category="sports" />} />
            </Routes>
        </Router>
      </div>
    );
  }
}
