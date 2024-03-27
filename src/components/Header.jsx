import React from "react";
import { Link } from "react-router-dom";

import "../styles/Header.css";

import { validateToken } from "../client-utils";

function Header({ isTokenValid, setIsTokenValid }) {

  const [loading, setLoading] = React.useState(true);
  const token = localStorage.getItem("token");

  React.useEffect(() => {
    validateToken(token, setIsTokenValid, setLoading);
  }, [token, setIsTokenValid]);

  return (
    <header>
      {loading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
        </div>
      )}
      <nav>
        <ul>
          {isTokenValid ? (
            <li>
              <Link to="/">Preferiti</Link>
            </li>
          ) : (
            <>
              <li>
                <Link to="/signup">Registrati</Link>
              </li>
              <li>
                <Link to="/login">Accedi</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
