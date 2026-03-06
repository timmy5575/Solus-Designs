import { useState } from "react";
import { ValidationError } from "@formspree/react";
import './form.css'

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [errors, setErrors] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrors(null);

    const form = e.target;
    const data = new FormData(form);

    try {
      const res = await fetch("https://formspree.io/f/xbdlndwq", {
        method: "POST",
        body: data,
        headers: {
          Accept: "application/json",
        },
      });

      const json = await res.json();

      if (res.ok) {
        form.reset();
        setStatus("success");
      } else {
        setErrors(json.errors || [{ message: "Unknown error" }]);
        setStatus("error");
      }
    } catch {
      setErrors([{ message: "Network error" }]);
      setStatus("error");
    }
  };

  return (
    <div className="form-container glass-panel">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-group">
          <input type="text" name="name" placeholder="Your Name" required className="form-input" />
        </div>

        <div className="input-group">
          <input type="email" name="email" placeholder="Your Email" required className="form-input" />
          <ValidationError prefix="Email" field="email" errors={errors} className="error-text" />
        </div>

        <div className="input-group">
          <textarea name="message" placeholder="Your Message" required className="form-input form-textarea"></textarea>
          <ValidationError prefix="Message" field="message" errors={errors} className="error-text" />
        </div>

        <button type="submit" disabled={status === "loading"} className="form-submit-btn">
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>

        {status === "success" && (
          <p className="success-message">Message sent successfully!</p>
        )}
        {status === "error" && (
          <p className="error-message">Something went wrong. Please try again.</p>
        )}
      </form>
    </div>
  );
}
