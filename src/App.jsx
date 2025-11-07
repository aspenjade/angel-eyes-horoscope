import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HoroscopeGrid from "./components/HoroscopeGrid";
import HoroscopeDetail from "./components/HoroscopeDetail";
import ambientTrack from "./assets/angel_eyes_filter.wav"; // your audio file
import "./App.css";
import PreSave from "./components/PreSave";

function App() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.volume = 0.15; // nice and soft
    audio.loop = true;

    // try to play immediately; if blocked, wait for first user interaction
    const tryPlay = () => {
      audio.play().catch(() => {
        const unlock = () => {
          audio.play().catch(() => {});
          window.removeEventListener("click", unlock);
          window.removeEventListener("keydown", unlock);
          window.removeEventListener("touchstart", unlock);
        };
        window.addEventListener("click", unlock, { once: true });
        window.addEventListener("keydown", unlock, { once: true });
        window.addEventListener("touchstart", unlock, { once: true });
      });
    };

    tryPlay();
  }, []);

  return (
    <Router>
      <div className="App">
        {/* background audio that persists across pages */}
        <audio ref={audioRef} src={ambientTrack} preload="auto" />

        <Routes>
          <Route path="/" element={<HoroscopeGrid />} />
          <Route path="/presave/:sign" element={<PreSave />} />
          <Route path="/horoscope/:sign" element={<HoroscopeDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
