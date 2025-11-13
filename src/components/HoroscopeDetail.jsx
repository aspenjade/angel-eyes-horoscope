import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./HoroscopeDetail.css";

export default function HoroscopeDetail() {
  const { sign } = useParams();
  const navigate = useNavigate();
  const [horoscope, setHoroscope] = useState("Loading…");
  const [error, setError] = useState("");

  // 🔒 gate: require presave unlock
  useEffect(() => {
    const ok = localStorage.getItem(`presave_unlocked_${sign}`);
    if (!ok) {
      navigate(`/presave/${sign}`, { replace: true });
    }
  }, [sign, navigate]);

  useEffect(() => {
    const today = new Date().toISOString().split("T")[0]; // e.g. "2025-11-12"

    import(`../data/${today}.json`)
      .then((module) => {
        const data = module.default;
        setHoroscope(data[sign] || "No horoscope yet ✨");
      })
      .catch((err) => {
        console.error("Error loading horoscope:", err);
        setError("Failed to load horoscope.");
      });
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
