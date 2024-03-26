import React from "react";
import { Link } from "react-router-dom";

import "../styles/Header.css";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/signup">Registrati</Link>
          </li>
          <li>
            <Link to="/login">Accedi</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
