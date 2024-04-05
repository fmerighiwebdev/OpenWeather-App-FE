import React from "react";
import { Link } from "react-router-dom";

import "../styles/Header.css";

import { validateToken, getUser, logOut } from "../client-utils";

function Header({ isTokenValid, setIsTokenValid, setSuccess }) {
  const [loading, setLoading] = React.useState(true);
  const [user, setUser] = React.useState({});
  const [isActive, setIsActive] = React.useState(false);
  const token = localStorage.getItem("token");

  React.useEffect(() => {
    validateToken(token, setIsTokenValid, setLoading);
    getUser(token, setUser);
  }, [token, setIsTokenValid]);

  function handleLogout() {
    logOut(token, setIsTokenValid, setSuccess);
    setIsActive(false);
  }

  function handleActiveMenu() {
    setIsActive(!isActive);
  }

  return (
    <header className={isActive ? "header-active" : null}>
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
              <div className="desktop-menu">
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
              </div>
              <div className={isActive ? "hamburger-menu active" : "hambuger-menu"} onClick={handleActiveMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
              </div>
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
      {isActive && (
        <div className="mobile-menu">
          <ul>
            <li>
              <Link className="primary-btn" to="/favourites">Preferiti</Link>
            </li>
            <li>
              <button className="logout-btn" onClick={handleLogout}>Esci</button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
