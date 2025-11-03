import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HoroscopeGrid from "./components/HoroscopeGrid";
import HoroscopeDetail from "./components/HoroscopeDetail";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HoroscopeGrid />} />
          <Route path="/horoscope/:sign" element={<HoroscopeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
