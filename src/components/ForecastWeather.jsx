import React from "react";

function ForecastWeather({ weatherDailyData, index }) {
  return (
    <div className="forecast-card">
      <div className="forecast-card-title">
        <h2>
          {index === 1
            ? "Domani"
            : index === 2
            ? "Dopodomani"
            : index === 3
            ? "Tra 3 giorni"
            : index === 4
            ? "Tra 4 giorni"
            : index === 5
            ? "Tra 5 giorni"
            : index === 6
            ? "Tra 6 giorni"
            : index === 7
            ? "Tra 7 giorni"
            : null}
        </h2>
      </div>
      <div className="forecast-card-info">
        <p className="temp">{Math.round(weatherDailyData.temp.day)}°</p>
        <p className="weather-main">{weatherDailyData.weather[0].main}</p>
        <p className="weather-desc">
          {weatherDailyData.weather[0].description}
        </p>
      </div>
      <div className="forecast-card-footer">
        <p>
          Min: <br></br> <span>{Math.round(weatherDailyData.temp.min)}°</span>
        </p>
        <p>
          Max: <br></br> <span>{Math.round(weatherDailyData.temp.max)}°</span>
        </p>
      </div>
    </div>
  );
}

export default ForecastWeather;
