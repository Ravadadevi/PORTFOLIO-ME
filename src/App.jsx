import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { FaBeer } from 'react-icons/fa';
import Home from "./Home";
import "./home.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;