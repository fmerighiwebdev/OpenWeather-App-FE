import React from "react";

function WeatherCard({ weatherData, type }) {

    function timestampToDate(timestamp) {
        const date = new Date(timestamp * 1000);
        const dateString = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        return dateString;
    }

    function timestampToTime(timestamp) {
        const date = new Date(timestamp * 1000);
        const timeString = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
        return timeString;
    }
    
    return (
        <div className="weather-card">
            <div className="weather-card-title">
                <h2>{type === "today" ? "Oggi" : timestampToDate(weatherData.current.dt)}</h2>
            </div>
            <div className="weather-card-info">
                <p className="temp">{Math.round(weatherData.current.temp)}°</p>
                <p className="weather-main">{weatherData.current.weather[0].main}</p>
                <p className="weather-desc">{weatherData.current.weather[0].description}</p>
            </div>
            <div className="weather-card-footer">
                <p>Alba: <br></br> <span>{timestampToTime(weatherData.current.sunrise)}</span></p>
                <p>Tramonto: <br></br> <span>{timestampToTime(weatherData.current.sunset)}</span></p>
            </div>
            <p className="hour-disclaimer">*in base alla tua ora locale</p>
        </div>
    );

}

export default WeatherCard;