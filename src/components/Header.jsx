import React from "react";
import { Link } from "react-router-dom";

import "../styles/Header.css";

import { validateToken, getUser, logOut } from "../client-utils";

function Header({ isTokenValid, setIsTokenValid }) {
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState({});
  const token = localStorage.getItem("token");

  React.useEffect(() => {
    validateToken(token, setIsTokenValid, setLoading);
    getUser(token, setUser);
  }, [token, setIsTokenValid]);

  function handleLogout() {
    logOut(token, setIsTokenValid);
  }

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
            <>
              <p className="greetings">
                Ciao, <span>{user.name}</span>
              </p>
              <li>
                <Link className="primary-btn" to="/favourites">
                  Preferiti
                </Link>
              </li>
              <li>
                <button className="logout-btn" onClick={handleLogout}>
                  Esci
                </button>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link className="primary-btn" to="/signup">
                  Registrati
                </Link>
              </li>
              <li>
                <Link className="secondary-btn" to="/login">
                  Accedi
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
