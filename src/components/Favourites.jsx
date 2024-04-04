import React from "react";

import Favourite from "./Favourite";

import "../styles/Favourites.css";
import { getFavourites } from "../client-utils";

function Favourites({ setCity }) {
  const [favourites, setFavourites] = React.useState([]);
  const token = localStorage.getItem("token");

  React.useEffect(() => {
    getFavourites(token, setFavourites);
  }, [token]);

  return (
    <section className="favourites-container">
      <h2>I tuoi preferiti</h2>
      {favourites.length === 0 && <p>Non hai città preferite</p>}
      <ul>
        {favourites.map((favourite, index) => (
          <Favourite
            key={index}
            favourite={favourite}
            favourites={favourites}
            setFavourites={setFavourites}
            setCity={setCity}
          />
        ))}
      </ul>
    </section>
  );
}

export default Favourites;
