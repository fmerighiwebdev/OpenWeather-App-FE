import React from "react";
import { useNavigate } from "react-router-dom";

import weatherIcon from '../images/weather-icon.svg';
import '../styles/Home.css';

function Home({ setCity, city, success, setSuccess }) {

    const navigate = useNavigate();

    React.useEffect(() => {
        const timeout = setTimeout(() => {
            setSuccess("");
        }, 3000);

        return () => clearTimeout(timeout);
    }, [success, setSuccess]);

    function handleChanges(event) {
        setCity(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        sessionStorage.setItem('city', city);
        navigate('/weather-data');
    }

    return (
      <main className="home">
        {success && (
          <p className="success-message">
            {success}
          </p>
        )}
        <section className="home-content">
          <div className="home-icon-container">
            <img src={weatherIcon} alt="Weather Icon" />
            <h1>OpenWeather App</h1>
          </div>
          <div className="home-search-container">
            <form className="home-form" onSubmit={handleSubmit}>
              <input
                name="city"
                id="city"
                placeholder="Inserisci una città"
                onChange={handleChanges}
              />
              <button type="submit">Cerca</button>
            </form>
          </div>
        </section>
      </main>
    );
}

export default Home;