import React from 'react'
import { Link } from "react-router-dom";
import './sev.css'
import ui from '../assets/ui.svg'
import gra from '../assets/gra.svg'
import bt from '../assets/bt.svg'

const Project = () => {
  const services = [
    {
      id: 1,
      title: "UI/UX Design",
      image: ui,
      description: "I design intuitive apps and websites that are simple, engaging, and easy to navigate for users.",
    },
    {
      id: 2,
      title: "Graphics Design",
      image: gra,
      description: "I create eye-catching visuals like logos and flyers that communicate your message clearly.",
    },
    {
      id: 3,
      title: "Brand Identity",
      image: bt,
      description: "I help companies develop a unique look and feel, choosing colors and styles that make them instantly recognizable.",
    }
  ];

  return (
    <section className="services-section container" id="services">
      <div className="services-header">
        <h2 className="section-title">
          <span className="text-gradient">Services</span> I Provide
        </h2>
        <p className="services-subtitle">
          Comprehensive design solutions tailored to elevate your brand and engage your audience.
        </p>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="service-card glass-panel">
            <div className="service-image-wrapper">
              <img src={service.image} alt={service.title} className="service-icon" />
            </div>
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
            {/* <button className="service-btn">
              Learn More
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </button> */}
          </div>
        ))}
      </div>

      <div className="services-footer">
        <Link to="/projects" className="btn-secondary">
          View My Portfolio
        </Link>
      </div>
    </section>
  )
}

export default Project