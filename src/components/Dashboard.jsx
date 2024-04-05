import React from "react";

import "../styles/Dashboard.css";
import heartFull from "../images/heart-full.svg";
import heartEmpty from "../images/heart-empty.svg";

import TodayWeather from "./TodayWeather";
import ForecastWeather from "./ForecastWeather";
import HourlyWeather from "./HourlyWeather";

import { getWeather, validateToken, getFavourites, addFavourite } from "../client-utils";

function Dashboard({ city, isTokenValid, setIsTokenValid }) {
  const [weatherData, setWeatherData] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [isFavourite, setIsFavourite] = React.useState(false);
  const [favourites, setFavourites] = React.useState([]);
  const token = localStorage.getItem("token");

  React.useEffect(() => {
    getWeather(city, setWeatherData, setLoading);
    getFavourites(token, setFavourites);
    validateToken(token, setIsTokenValid, setLoading);
  }, [city, token, setIsTokenValid]);

  React.useEffect(() => {
    function checkFavourite() {
      if (favourites.length === 0) return;
      const isFavourite = favourites.some(
        (favourite) => favourite.city === city
      );
      setIsFavourite(isFavourite);
    }

    checkFavourite();
  }, [favourites, city]);

  async function handleAddFavourite() {
    addFavourite(token, city, setIsFavourite);
  }

  return (
    <section className="weather-dashboard">
      {loading && (
        <div className="loading-container white-bg">
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
          {isTokenValid && (
            <div className="add-favourites">
              <button onClick={handleAddFavourite} disabled={isFavourite}>
                {isFavourite ? "Aggiunto" : "Aggiungi ai preferiti"}
              </button>
              <img
                src={isFavourite ? heartFull : heartEmpty}
                alt="Heart icon"
              ></img>
            </div>
          )}
          <div className="gradient-overlay"></div>
        </div>
      )}
      <div className="weather-hourly">
        <h2>Previsioni orarie per {city}</h2>
        <div className="hourly-cards">
          {weatherData.hourly &&
            weatherData.hourly.map((hour, index) => {
              if (index > 23 || index < new Date().getHours) return null;
              return <HourlyWeather key={index} hour={hour} index={index} />;
            })}
        </div>
      </div>
      <div className="weather-forecast">
        <h2>Previsioni per i prossimi 7 giorni per {city}</h2>
        <div className="forecast-cards">
          {weatherData.daily &&
            weatherData.daily.map((day, index) => {
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
