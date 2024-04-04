import React from "react";

import Favourite from "./Favourite";

import "../styles/Favourites.css";
import { getFavourites } from "../client-utils";

function Favourites({ setCity }) {
  const [favourites, setFavourites] = React.useState([]);
  const [success, setSuccess] = React.useState("");
  const token = localStorage.getItem("token");

  React.useEffect(() => {
    getFavourites(token, setFavourites);
  }, [token]);

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setSuccess("");
    }, 3000);

    return () => clearTimeout(timeout);
  }, [success]);

  return (
    <section className="favourites-container">
      {success && (
        <p className="success-message">
          {success}
        </p>
      )}
      <h2>Le tue città preferite</h2>
      {favourites.length === 0 && <p className="no-favourites">Non hai città preferite</p>}
      <ul>
        {favourites.map((favourite, index) => (
          <Favourite
            key={index}
            favourite={favourite}
            favourites={favourites}
            setFavourites={setFavourites}
            setCity={setCity}
            setSuccess={setSuccess}
          />
        ))}
      </ul>
    </section>
  );
}

export default Favourites;
