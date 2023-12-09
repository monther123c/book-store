import React from "react";
import "../App.css";
import { useAppContext } from "./context/appContext";

const Favorites = () => {
  const { favorites, removeFromFavorites } = useAppContext();

  const favoritesChecker = (id) => {
    return favorites.some((book) => book.id === id);
  };

  return (
    <div className="fav">
      {favorites.length > 0 ? (
        favorites.map((book) => (
          <div key={book.id} className="book">
            <div>
              <h3>{book.title}</h3>
            </div>
            <div className="imgs">
              <img src={book.cover_picture} alt="#" />
            </div>
            <div>
              {favoritesChecker(book.id) ? (
                <button onClick={() => removeFromFavorites(book)}>
                  Remove From Favorites
                </button>
              ) : (
                <button disabled>Add to favorites</button>
              )}
            </div>
          </div>
        ))
      ) : (
        <h1>You don't have any favorite books</h1>
      )}
    </div>
  );
};

export default Favorites;

