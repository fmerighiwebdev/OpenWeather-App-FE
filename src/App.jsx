import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Footer from "./components/Footer";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Header from "./components/Header";

import "./styles/App.css";

function App() {
  const [city, setCity] = React.useState(sessionStorage.getItem("city")) || "";
  const [isTokenValid, setIsTokenValid] = React.useState(null);

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
              />
              <Home setCity={setCity} city={city} />
            </>
          }
        />
        <Route
          exact
          path="/weather-data"
          element={
            <>
              <Dashboard city={city} />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<h1>404 Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
