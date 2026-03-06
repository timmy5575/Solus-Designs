import React from 'react'
import './svg.css'
import ig from '../assets/ig.svg'
import fb from '../assets/fb.svg'
import X from '../assets/x.svg'
import wh from '../assets/wh.svg'

const Svg = () => {
  return (
    <div className="social-connect-container">
      <div className="social-connect-grid">
        <a
          href="https://www.instagram.com/professor_of_the_heavens?igsh=MWU5dzNtMjFkbTI1Mg=="
          target="_blank"
          rel="noopener noreferrer"
          className="connect-card glass-panel"
        >
          <div className="connect-icon"><img src={ig} alt="Instagram" /></div>
          <span className="connect-label">Instagram</span>
        </a>

        <a
          href="https://www.facebook.com/oluwafemisamuel.oyewole.9?mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          className="connect-card glass-panel"
        >
          <div className="connect-icon"><img src={fb} alt="Facebook" /></div>
          <span className="connect-label">Facebook</span>
        </a>

        <a
          href="https://x.com/femiszn03?t=RIYppiBDA-KZI2bNgj5qVQ&s=09"
          target="_blank"
          rel="noopener noreferrer"
          className="connect-card glass-panel"
        >
          <div className="connect-icon"><img src={X} alt="X (Twitter)" /></div>
          <span className="connect-label">X (Twitter)</span>
        </a>

        <a
          href="https://wa.link/91ir0n"
          target="_blank"
          rel="noopener noreferrer"
          className="connect-card glass-panel"
        >
          <div className="connect-icon"><img src={wh} alt="WhatsApp" /></div>
          <span className="connect-label">WhatsApp</span>
        </a>
      </div>
    </div>
  )
}

export default Svg