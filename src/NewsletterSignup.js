import React, { useState } from "react";
import "./newsletter.css";

function NewsletterSignup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="form-container">
      {submitted ? (
        <h2>Thank you for signing up, {name}!</h2>
      ) : (
        <form onSubmit={handleSubmit}>
          <h2>Sign Up for Our Newsletter</h2>
          <input
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      )}
    </div>
  );
}

export default NewsletterSignup;
