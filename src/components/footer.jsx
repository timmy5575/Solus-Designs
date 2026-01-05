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
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
        return;
      }
  
      navigate("/");
  
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({
          behavior: "smooth",
        });
      }, 80);
    };

  return (
    <footer className="footer">
      <div className="footer-column">
        <h3 className="footer-title">Solus Designs</h3>
        <p className="footer-text">
          Crafting exceptional digital experiences through innovative design and creative solutions.
        </p>

        <div className="footer-socials">
          <a href="https://www.instagram.com/professor_of_the_heavens?igsh=MWU5dzNtMjFkbTI1Mg==" target="_blank" rel="noopener noreferrer">
             <div className='fc'><img src={ig} alt="instagram" /></div>
          </a>
          <a href="https://www.facebook.com/oluwafemisamuel.oyewole.9?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
             <div className='fc'><img src={fb} alt="facebook" /></div>
          </a>
          <a href="https://x.com/femiszn03?t=RIYppiBDA-KZI2bNgj5qVQ&s=09" target="_blank" rel="noopener noreferrer">
           <div className='fc'><img src={X} alt="X" /></div>
          </a>
          <a href="https://wa.link/91ir0n" target="_blank" rel="noopener noreferrer">
             <div className='fc'><img src={wh} alt="whatsapp" /></div>
          </a>
        </div>
      </div>

      <div className="footer-column">
        <h3 className="footer-title">Navigation</h3>
        <ul className="footer-links">
          <li>
             <NavLink to="/" onClick={() => setShowMenu(false)} className={({ isActive }) => isActive ? "nav-link active" : "nav-link" }>
                Home
             </NavLink>
          </li>
            <li onClick={() => goToSection("about")}>
              About
            </li>

            <li onClick={() => goToSection("services")}>
              Services
            </li>
         
            <li>
              <NavLink to="/projects" onClick={() => setShowMenu(false)} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                Protfolio
              </NavLink>
            </li>
        </ul>
      </div>

      <div className="footer-column">
        <h3 className="footer-title">Contact</h3>
        <div className="footer-contact">
          <div className='fc'><img src={em} alt="email" /> </div>
          <span>Therealfemi.oyewolegcfr@yahoo.com</span>
        </div>

        <div className="footer-contact">
           <div className='fc'><img src={phone} alt="phone" /></div>
          <span>09064690659, 08084025402</span>
        </div>

        <p className="footer-text">Lagos / Nigeria</p>
      </div>
    </footer>
  )
}

export default Footer
