import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import './Nav.css';

const Nav = () => {
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
    <header>
      <nav className="nav">
        <h2>
          Solus_<span>Designs</span>
        </h2>

        <div className={`navbar ${showMenu ? "open" : ""}`}>
          <ul className="list">
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

          <li>
            <button className="bons" 
        onClick={() => {
          document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
          setShowMenu(false);
        }}>Get in Touch</button>
          </li>
          </ul>
        </div>

        <div className="menu-icon" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? "✖" : "☰"}
        </div>
      </nav>
    </header>
  );
};

export default Nav;
