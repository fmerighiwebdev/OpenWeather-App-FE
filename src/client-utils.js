import axios from "axios";

const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

async function getWeather(city, setWeatherData, setLoading) {
  try {
    const coordinates = await axios.get(
      `http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
    );
    const { lat, lon } = coordinates.data[0];

    const weather = await axios.get(
      `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
    );
    setWeatherData(weather.data);
  } catch (err) {
    console.log(err);
  } finally {
    setLoading(false);
  }
}

async function signUp(name, username, email, password) {
  try {
    const response = await axios.post("http://localhost:5000/api/signup", {
      name,
      username,
      email,
      password
    });
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
}

export { getWeather, signUp };
