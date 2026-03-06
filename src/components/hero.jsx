import React from 'react'
import { Link } from "react-router-dom";
import './hero.css'

const Hero = () => {
  return (
    <section className="hero-section container">
      <div className="hero-content">
        <div className="hero-badge">
          
        </div>

        <h1 className="hero-title">
          Crafting <span className="text-gradient">Exceptional</span>
          <br /> Digital Experiences
        </h1>

        <p className="hero-subtitle">
          I build premium, responsive web applications through innovative design and creative engineering solutions that drive results.
        </p>

        <div className="hero-actions">
          <Link to="/projects" className="btn-primary">
            View Projects
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>

          <button
            className="btn-secondary"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Decorative background elements */}
      <div className="hero-glow-1"></div>
      <div className="hero-glow-2"></div>
    </section>
  )
}

export default Hero