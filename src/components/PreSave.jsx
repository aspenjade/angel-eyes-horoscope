import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./PreSave.css";

export default function PreSave() {
  const { sign } = useParams();
  const navigate = useNavigate();

  const presaveUrl = "https://mtaf.lnk.to/angeleyes"; // <-- your link

  // Optionally, auto-open presave in a new tab when page loads:
  // useEffect(() => { window.open(presaveUrl, "_blank", "noopener,noreferrer"); }, []);

  return (
    <div className="presave-container fade-in">
      <div className="presave-content">
        <h1 className="presave-title">pre-save the new single</h1>
        <p className="presave-text">Be first to hear it when it drops.</p>

        <a
          href={presaveUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="presave-button"
        >
          Pre-Save on Spotify
        </a>

        {/* Primary next step */}
        <button
          className="continue-button"
          onClick={() => navigate(`/horoscope/${sign}`)}
        >
          continue to your horoscope →
        </button>

        {/* Optional tiny fallback link */}
        <div className="tiny">
          <Link to={`/horoscope/${sign}`}>Skip pre-save</Link>
        </div>
      </div>
    </div>
  );
}
