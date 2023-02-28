import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav>
      <div>
        <h1>
          <img src="/images/logo.png" alt="logo" />
          Casas, Casinhas e Casarões
        </h1>
      </div>
      <div>
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Properties">Comprar</NavLink>
          </li>
          <li>
            <NavLink to="/Rent">Arrendar</NavLink>
          </li>
          <li>
            <NavLink to="/Contacts">Contactos</NavLink>
          </li>
          <li className="login">
            <NavLink to="/login">Login</NavLink>
          </li>
        </ul>
        <div className={`hamburger ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
}