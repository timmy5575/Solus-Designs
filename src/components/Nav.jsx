import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import './Nav.css';

const Nav = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav container">
        <div className="logo cursor-pointer" onClick={() => navigate("/")}>
          <h2>Solus<span className="text-gradient">Designs</span></h2>
        </div>

        <div className={`navbar-wrapper ${showMenu ? "open" : ""}`}>
          <ul className="nav-links">
            <li>
              <NavLink to="/" onClick={() => setShowMenu(false)} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Home</NavLink>
            </li>
            <li><button onClick={() => goToSection("about")} className="nav-link">About</button></li>
            <li><button onClick={() => goToSection("services")} className="nav-link">Services</button></li>
            <li>
              <NavLink to="/projects" onClick={() => setShowMenu(false)} className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>Portfolio</NavLink>
            </li>
            <li className="mobile-only">
              <button className="cta-button" onClick={() => goToSection("contact")}>Get in Touch</button>
            </li>
          </ul>
        </div>

        <div className="nav-actions">
          <button className="cta-button desktop-only" onClick={() => goToSection("contact")}>
            Get in Touch
          </button>
          <button className="menu-toggle" onClick={() => setShowMenu(!showMenu)} aria-label="Toggle Menu">
            {showMenu ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 6h16M4 12h16M4 18h16" /></svg>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
