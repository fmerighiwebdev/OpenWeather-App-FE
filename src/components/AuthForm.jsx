import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import "../styles/Auth.css";

import { signUp, logIn } from "../client-utils";

function AuthForm({ type }) {
  const [user, setUser] = React.useState({
    name: "",
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  function handleChanges(e) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (type === "signup") {
      signUp(user.name, user.username, user.email, user.password);
      navigate("/login");
    } else if (type === "login") {
      logIn(user.email, user.password);
      navigate("/");
    }

    setUser({
      name: "",
      username: "",
      email: "",
      password: "",
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{type === "login" ? "Accedi" : "Registrati"}</h2>
      {type === "signup" && (
        <div className="form-block">
          <label htmlFor="name">Nome*</label>
          <input
            type="text"
            id="name"
            name="name"
            value={user.name}
            required
            onChange={handleChanges}
          />
        </div>
      )}
      {type === "signup" && (
        <div className="form-block">
          <label htmlFor="username">Username*</label>
          <input
            type="text"
            id="username"
            name="username"
            value={user.username}
            required
            onChange={handleChanges}
          />
        </div>
      )}
      <div className="form-block">
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          id="email"
          name="email"
          value={user.email}
          required
          onChange={handleChanges}
        />
      </div>
      <div className="form-block">
        <label htmlFor="password">Password*</label>
        <input
          type="password"
          id="password"
          name="password"
          value={user.password}
          required
          onChange={handleChanges}
        />
      </div>
      <button type="submit">
        {type === "login" ? "Accedi" : "Registrati"}
      </button>
      {type === "login" ? (
        <p>
          Non hai un account? <Link to="/signup">Registrati</Link>
        </p>
      ) : (
        <p>
          Hai già un account? <Link to="/login">Accedi</Link>
        </p>
      )}
    </form>
  );
}

export default AuthForm;
