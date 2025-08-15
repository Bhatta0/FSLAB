import React, { useState } from "react";
import "./feedback.css";

function FeedbackPoll() {
  const [choice, setChoice] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleClick = (option) => {
    setChoice(option);
    setSubmitted(true);
  };

  return (
    <div className="poll-container">
      {submitted ? (
        <h2>Thank you for your feedback! You rated us: {choice}</h2>
      ) : (
        <>
          <h2>How would you rate our tech support?</h2>
          <div>
            <button className="good" onClick={() => handleClick("Good")}>
              Good
            </button>
            <button className="neutral" onClick={() => handleClick("Neutral")}>
              Neutral
            </button>
            <button className="poor" onClick={() => handleClick("Poor")}>
              Poor
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default FeedbackPoll;
