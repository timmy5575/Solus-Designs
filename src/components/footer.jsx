import { useState } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import ig from '../assets/ig.svg'
import fb from '../assets/fb.svg'
import X from '../assets/x.svg'
import wh from '../assets/wh.svg'
import em from '../assets/email.svg'
import phone from '../assets/phone.svg'
import './Footer.css'

const Footer = () => {
  const [showMenu, setShowMenu] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const goToSection = (id) => {
    setShowMenu(false);
    if (location.pathname === "/") {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      return;
    }
    navigate("/");
    setTimeout(() => {
      document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <footer className="footer mt-auto">
      <div className="footer-container container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h3 className="footer-title">
              Solus<span className="text-gradient">Designs</span>
            </h3>
            <p className="footer-text">
              Crafting exceptional digital experiences through innovative design and creative solutions.
            </p>
            <div className="footer-socials">
              <a href="https://www.instagram.com/professor_of_the_heavens?igsh=MWU5dzNtMjFkbTI1Mg==" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src={ig} alt="instagram" />
              </a>
              <a href="https://www.facebook.com/oluwafemisamuel.oyewole.9?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src={fb} alt="facebook" />
              </a>
              <a href="https://x.com/femiszn03?t=RIYppiBDA-KZI2bNgj5qVQ&s=09" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src={X} alt="X" />
              </a>
              <a href="https://wa.link/91ir0n" target="_blank" rel="noopener noreferrer" className="social-icon">
                <img src={wh} alt="whatsapp" />
              </a>
            </div>
          </div>

          <div className="footer-links-col">
            <h3 className="footer-subtitle">Navigation</h3>
            <ul className="footer-nav">
              <li>
                <NavLink to="/" onClick={() => setShowMenu(false)} className={({ isActive }) => isActive ? "footer-link active" : "footer-link"}>Home</NavLink>
              </li>
              <li><button onClick={() => goToSection("about")} className="footer-link">About</button></li>
              <li><button onClick={() => goToSection("services")} className="footer-link">Services</button></li>
              <li>
                <NavLink to="/projects" onClick={() => setShowMenu(false)} className={({ isActive }) => isActive ? "footer-link active" : "footer-link"}>Portfolio</NavLink>
              </li>
            </ul>
          </div>

          <div className="footer-contact-col">
            <h3 className="footer-subtitle">Contact</h3>
            <div className="contact-item">
              <div className="contact-icon glass-panel"><img src={em} alt="email" /></div>
              <span>Therealfemi.oyewolegcfr@yahoo.com</span>
            </div>
            <div className="contact-item">
              <div className="contact-icon glass-panel"><img src={phone} alt="phone" /></div>
              <span>09064690659, 08084025502</span>
            </div>
            <p className="footer-text mt-sm">Lagos, Nigeria</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Solus Designs. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
