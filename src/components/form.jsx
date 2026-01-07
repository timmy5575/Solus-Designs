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
    <form onSubmit={handleSubmit} className="contact-form">
      <input type="text" name="name" placeholder="Your Name" required />

      <input type="email" name="email" placeholder="Your Email" required />
      <ValidationError prefix="Email" field="email" errors={errors} />

      <textarea name="message" placeholder="Your Message" required></textarea>
      <ValidationError prefix="Message" field="message" errors={errors} />

      <button type="submit" disabled={status === "loading"}>
        {status === "loading" ? "Sending..." : "Send Message"}
      </button>

      {status === "success" && (
        <p className="success">Message sent successfully.</p>
      )}
      {status === "error" && (
        <p className="error">Something went wrong. Check errors above.</p>
      )}
    </form>
  );
}
