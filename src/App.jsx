import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";
import Favourites from "./components/Favourites";

import "./styles/App.css";

function App() {
  const [city, setCity] = React.useState(sessionStorage.getItem("city")) || "";
  const [isTokenValid, setIsTokenValid] = React.useState(null);
  const [success, setSuccess] = React.useState("");

  return (
    <Router>
      <Routes>
        <Route
          exact
          path="/"
          element={
            <>
              <Header
                isTokenValid={isTokenValid}
                setIsTokenValid={setIsTokenValid}
                setSuccess={setSuccess}
              />
              <Home setCity={setCity} city={city} success={success} setSuccess={setSuccess} />
            </>
          }
        />
        <Route
          exact
          path="/weather-data"
          element={
            <>
              <Dashboard
                city={city}
                isTokenValid={isTokenValid}
                setIsTokenValid={setIsTokenValid}
              />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/favourites" element={<Favourites setCity={setCity} />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
