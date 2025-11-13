import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./HoroscopeDetail.css";

// ✅ Import all JSON horoscope files at build time
const horoscopeFiles = import.meta.glob("../../data/*.json", { eager: true });

export default function HoroscopeDetail() {
  const { sign } = useParams();
  const navigate = useNavigate();
  const [horoscope, setHoroscope] = useState("Loading…");
  const [error, setError] = useState("");

  // 🔒 Require presave unlock before viewing
  useEffect(() => {
    const ok = localStorage.getItem(`presave_unlocked_${sign}`);
    if (!ok) {
      navigate(`/presave/${sign}`, { replace: true });
    }
  }, [sign, navigate]);

  useEffect(() => {

    const today = new Date().toLocaleDateString("en-CA", {
      timeZone: "America/Los_Angeles",
      });// e.g. "2025-11-12"
    console.log("🪐 Looking for horoscope file:", today);

    // Build the file path based on today's date
    const path = `../../data/${today}.json`;
    const file = horoscopeFiles[path];

    if (file) {
      const data = file.default;
      console.log("✅ Loaded horoscope data:", data);
      setHoroscope(data[sign] || "No horoscope yet ✨");
    } else {
      console.warn("⚠️ No horoscope file found for:", today);
      setError("Failed to load horoscope (file missing).");
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
