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
      password,
    });
    console.log(response.data);
  } catch (err) {
    console.log(err);
  }
}

async function logIn(email, password) {
  try {
    const response = await axios.post("http://localhost:5000/api/login", {
      email,
      password,
    });
    localStorage.setItem("token", response.data.token);
    console.log(response.data);
  } catch (err) {
    console.log(err.response.data);
  }
}

async function validateToken(token, setIsTokenValid, setLoading) {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/validateToken",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log(response.data);
    setIsTokenValid(true);
  } catch (err) {
    console.log(err);
    setIsTokenValid(false);
  } finally {
    setLoading(false);
  }
}

async function getUser(token, setUser) {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/validateToken",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setUser(response.data.user);
  } catch (err) {
    console.log(err);
  }
}

async function getFavourites(token, setFavourites) {
  try {
    const response = await axios.get(
      "http://localhost:5000/api/getFavourites",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    setFavourites(response.data);
  } catch (err) {
    console.log(err);
  }
}

async function logOut(token, setIsTokenValid, setSuccess) {
  try {
    const response = await axios.get("http://localhost:5000/api/logout", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    localStorage.removeItem("token");
    setIsTokenValid(false);
    setSuccess(response.data.message);
  } catch (err) {
    console.log(err);
  }
}

export { getWeather, signUp, logIn, validateToken, getUser, getFavourites, logOut };
