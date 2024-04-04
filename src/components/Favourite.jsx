import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Favourite({ favourite, favourites, setFavourites, setCity, setSuccess }) {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();

  async function handleRemoveFavourite() {
    setSuccess("");
    try {
      const response = await axios.delete(
        `http://localhost:5000/api/removeFavourite/${favourite.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setFavourites(favourites.filter((fav) => fav.id !== favourite.id));
      setSuccess(response.data.message);
    } catch (err) {
      console.log(err);
    }
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
