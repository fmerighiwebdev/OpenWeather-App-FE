import React from "react";
import { useNavigate } from "react-router-dom";

import { removeFavourite } from "../client-utils";

function Favourite({ favourite, favourites, setFavourites, setCity, setSuccess }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  async function handleRemoveFavourite() {
    removeFavourite(token, favourite, favourites, setFavourites, setSuccess);
  }

  function handleFavouriteClick() {
    setCity(favourite.city);
    navigate("/weather-data");
  }

  return (
    <li className="favourite">
      <p onClick={handleFavouriteClick}>{favourite.city}</p>
      <button className="remove-favourite" onClick={handleRemoveFavourite}>
        Rimuovi dai preferiti
      </button>
    </li>
  );
}

export default Favourite;
