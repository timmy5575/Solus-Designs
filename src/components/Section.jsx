import React from 'react'
import './Sect.css'
import idea from '../assets/idea.png'
import cre from '../assets/crev.png'
import att from '../assets/attr.png'

const Section = () => {
  return (
    <div className="about-section container">
      <div className="about-content glass-panel">
        <div className="about-header">
          <h2 className="section-title">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="about-description">
            I create brand identities, user interfaces, and visual designs that help businesses stand out and connect with their audiences.
            Whether you need a complete brand overhaul, a digital product redesign,
            or compelling graphics, I'm here to bring your vision to life. I'm currently taking on new projects and collaborations.
            Let's talk about your goals and how great design can help you achieve them.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-card">
            <h3 className="stat-number text-gradient">200+</h3>
            <p className="stat-label">Projects Completed</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number text-gradient">20+</h3>
            <p className="stat-label">Brands Created</p>
          </div>
          <div className="stat-card">
            <h3 className="stat-number text-gradient">6+</h3>
            <p className="stat-label">Years of Experience</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section