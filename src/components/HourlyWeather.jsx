import React from "react";

function HourlyWeather({ hour, index }) {
  return (
    <div className="hourly-card" key={index}>
      <p className="hourly-time">
        {new Date(hour.dt * 1000).getHours().toString().padStart(2, "0")}
        :00
      </p>
      <img
        className="hourly-icon"
        src={`http://openweathermap.org/img/wn/${hour.weather[0].icon}.png`}
        alt={hour.weather[0].description}
      />
      <p className="hourly-temp">{Math.round(hour.temp)}°</p>
    </div>
  );
}

export default HourlyWeather;
