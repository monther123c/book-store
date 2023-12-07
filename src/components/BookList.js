import React, { useState, useEffect } from "react";
import axios from 'axios';
import { API_URL } from '../API';
import { useAppContext } from "./context/appContext";
import '../App.css';
import { useNavigate } from "react-router-dom";

 

const BookList = () => {
  const [books, setBooks] = useState([]);
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  console.log(favorites);


  const favoritesChecker = (id) => {
    const boolean = favorites.some((book) => book.id === id);
    return boolean;
  }

  const navigate =useNavigate();


  useEffect(() => {
    axios.get(API_URL)
      .then(res => {
        console.log(res.data);
        setBooks(res.data);
      })
      .catch(err => console.log(err));
  }, []);



  return (<div>
    <div className="book-list">
      {books.map((book) => (
        <div key={book.id} className="book">
          <div><h3>{book.title}</h3></div>
          <div className="imgs"><img src={book.cover_picture} alt="#"  onClick={()=>navigate("/books/${book.id}")}/></div>
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
      ))}
    </div>
    </div>
  );
};

export default BookList;
