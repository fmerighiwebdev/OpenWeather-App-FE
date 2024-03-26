import React from "react";

import "../styles/Auth.css";

function AuthForm({ type }) {
  return (
    <form>
      <h1>{type === "login" ? "Accedi" : "Registrati"}</h1>
      {type === "signup" && (
        <>
          <label htmlFor="name">Nome</label>
          <input type="text" id="name" name="name" required />
        </>
      )}
      {type === "signup" && (
        <>
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" required />
        </>
      )}
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" required />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" name="password" required />
      <button type="submit">
        {type === "login" ? "Accedi" : "Registrati"}
      </button>
    </form>
  );
}

export default AuthForm;
