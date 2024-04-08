import React from "react";

import notFound from "../images/error-404.svg";

function NotFound() {
  return (
    <div className="not-found-container">
      <img src={notFound} alt="Not found" />
      <p>Scusa, la pagina che stai cercando non esiste.</p>
    </div>
  );
}

export default NotFound;
