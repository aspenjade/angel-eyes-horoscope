import React from "react";
import { useParams, Link } from "react-router-dom";
import "./HoroscopeDetail.css";

export default function HoroscopeDetail() {
  const { sign } = useParams();

  return (
    <div className="detail-container fade-in">
      <h1 className="detail-title">
        {sign.charAt(0).toUpperCase() + sign.slice(1)}
      </h1>
      <p className="detail-text">
        Your horoscope for today will appear here soon. ✨
      </p>
      <Link to="/" className="back-link">
        ← Back to all signs
      </Link>
    </div>
  );
}
