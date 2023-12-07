import React from "react";
import "../App.css";
import { useAppContext } from "./context/appContext";

const Favorites =() => {
    const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  console.log(favorites);


  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  }


    return(
        <div className="fav">
       
       {favorites.length> 0 ? favorites.map((book) => (
        <div key={book.id} className="book">
          <div><h3>{book.title}</h3></div>
          <div className="imgs"><img src={book.cover_picture} alt="#" /></div>
          <div>
            {
              favoritesChecker(book.id) ?

                <button onClick={() => removeFromFavorites(book)}>
                  remove From Favorites
                </button>
                : <button onClick={() => addToFavorites(book)}>
                  Add to favorites
                </button>}


          </div>
        </div>
      )):
      <h1>you dont have  any favorites books</h1>
      }

        </div>
    )
}
export default Favorites;











// <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<