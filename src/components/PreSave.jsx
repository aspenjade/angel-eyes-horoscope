import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./PreSave.css";

export default function PreSave() {
  const { sign } = useParams();
  const navigate = useNavigate();
  const presaveUrl = "https://mtaf.lnk.to/angeleyes"; // 🔗 replace this

  const [step, setStep] = useState(1);

  const handlePresaveClick = () => {
    window.open(presaveUrl, "_blank", "noopener,noreferrer");
    setStep(2); // move to confirmation step
  };

  const handleConfirmClick = () => {
    localStorage.setItem(`presave_unlocked_${sign}`, "1");
    navigate(`/horoscope/${sign}`);
  };

  return (
    <div className="presave-wrap">
      <div className="presave-card">
        {step === 1 ? (
          <>
            <h1 className="presave-title">
              Presave Angel Eyes to access your horoscope
            </h1>
            <h1 className="presave-sub-title">
             come back to this window when you're done
            </h1>
            <button className="presave-cta" onClick={handlePresaveClick}>
              Pre-save Angel Eyes
            </button>
          </>
        ) : (
          <>
            <h1 className="presave-title">
              Did you presave Angel Eyes?
            </h1>
            <button className="presave-cta" onClick={handleConfirmClick}>
              I presaved — take me to my horoscope ✨
            </button>
          </>
        )}
      </div>
    </div>
  );
}
