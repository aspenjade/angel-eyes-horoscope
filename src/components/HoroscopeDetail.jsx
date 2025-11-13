// src/components/HoroscopeDetail.jsx
import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import horoscopeData from "../data/horoscope.json"; // adjust path as needed
import "./HoroscopeDetail.css";

export default function HoroscopeDetail() {
  const { sign } = useParams();
  const navigate = useNavigate();
  const [horoscope, setHoroscope] = useState("Loading…");
  const [error, setError] = useState("");

  useEffect(() => {
    const ok = localStorage.getItem(`presave_unlocked_${sign}`);
    if (!ok) navigate(`/presave/${sign}`, { replace: true });
  }, [sign, navigate]);

  useEffect(() => {
    try {
      const text =
        horoscopeData[sign.toLowerCase()] || "No horoscope yet ✨";
      setHoroscope(text);
    } catch (err) {
      console.error(err);
      setError("Failed to load horoscope.");
    }
  }, [sign]);

  return (
    <div className="detail-container fade-in">
      <div className="detail-content">
        <h1 className="detail-title">
          {sign.charAt(0).toUpperCase() + sign.slice(1)}
        </h1>

        {error ? (
          <p className="detail-text error">{error}</p>
        ) : (
          <p className="detail-text">{horoscope}</p>
        )}

        <Link to="/" className="back-link">← Back</Link>
      </div>
    </div>
  );
}
