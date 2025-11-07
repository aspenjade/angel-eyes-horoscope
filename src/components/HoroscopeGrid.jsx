import React from "react";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../assets/background.JPG"; // import image
import "./HoroscopeGrid.css";

const horoscopes = [
  { name: "Aries", icon: "♈" },
  { name: "Taurus", icon: "♉" },
  { name: "Gemini", icon: "♊" },
  { name: "Cancer", icon: "♋" },
  { name: "Leo", icon: "♌" },
  { name: "Virgo", icon: "♍" },
  { name: "Libra", icon: "♎" },
  { name: "Scorpio", icon: "♏" },
  { name: "Sagittarius", icon: "♐" },
  { name: "Capricorn", icon: "♑" },
  { name: "Aquarius", icon: "♒" },
  { name: "Pisces", icon: "♓" },
];

export default function HoroscopeGrid() {
  const navigate = useNavigate();

  return (
    <div
      className="horoscope-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="app-title">Angel Eyes Horoscope</h1>
      <div className="horoscope-grid">
        {horoscopes.map((sign) => (
          <div
            key={sign.name}
            className="horoscope-card"
            onClick={() => navigate(`/presave/${sign.name.toLowerCase()}`)}
          >
            <div className="horoscope-icon">{sign.icon}</div>
            <div className="horoscope-name">{sign.name}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
