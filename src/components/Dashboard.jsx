import React from "react";

import "../styles/Dashboard.css";

import TodayWeather from "./TodayWeather";
import ForecastWeather from "./ForecastWeather";
import HourlyWeather from "./HourlyWeather";

import { getWeather } from "../client-utils";

function Dashboard({ city }) {

  const [weatherData, setWeatherData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    getWeather(city, setWeatherData, setLoading);
  }, [city]);

  return (
    <section className="weather-dashboard">
      {loading && (
        <div className="loading-container">
          <div className="loading-spinner"></div>
        </div>
      )}
      {weatherData.current && (
        <div
          className={
            weatherData.current.weather[0].main === "Clear"
              ? "today-weather-container clear-bg"
              : weatherData.current.weather[0].main === "Clouds"
              ? "today-weather-container cloud-bg"
              : weatherData.current.weather[0].main === "Rain"
              ? "today-weather-container rain-bg"
              : weatherData.current.weather[0].main === "Snow"
              ? "today-weather-container snow-bg"
              : weatherData.current.weather[0].main === "Thunderstorm"
              ? "today-weather-container thunderstorm-bg"
              : "today-weather-container"
          }
        >
          <TodayWeather weatherData={weatherData} type="today" />
          <div className="gradient-overlay"></div>
        </div>
      )}
      <div className="weather-hourly">
        <h2>Previsioni orarie per {city}</h2>
        <div className="hourly-cards">
          {weatherData.hourly && weatherData.hourly.map((hour, index) => {
            if (index > 23 || index < new Date().getHours) return null;
            return <HourlyWeather key={index} hour={hour} index={index} />;
          })}
        </div>
      </div>
      <div className="weather-forecast">
        <h2>Previsioni per i prossimi 7 giorni per {city}</h2>
        <div className="forecast-cards">
          {weatherData.daily && weatherData.daily.map((day, index) => {
            if (index === 0) return null;
            return (
              <ForecastWeather
                key={index}
                weatherDailyData={day}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Dashboard;
