import React from "react";

import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} - OpenWeather App</p>
      <p>
        Credits:{" "}
        <a href="https://www.linkedin.com/in/francesco-merighi-373939217/">
          Francesco Merighi
        </a>{" "}
        - Powered by{" "}
        <a href="https://openweathermap.org/">OpenWeatherMap API</a>
      </p>
    </footer>
  );
}

export default Footer;
