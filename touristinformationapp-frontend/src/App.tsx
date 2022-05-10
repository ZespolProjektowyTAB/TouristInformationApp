import React from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GridWithFeaturedPost from "./components/GridWithFeaturedPost";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/blog" element={<GridWithFeaturedPost />} />
        </Routes>
      </div>
    </Router>
  );
}

function Home() {
  return <h1>HOME PAGE</h1>;
}

export default App;
