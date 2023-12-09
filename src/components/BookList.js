import React, { useState, useEffect } from "react";
import axios from 'axios';
import { API_URL } from '../API';
import { useAppContext } from "./context/appContext";
import '../App.css';
import { useNavigate } from "react-router-dom";

const BookList = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const { favorites, addToFavorites, removeFromFavorites } = useAppContext();
  const navigate = useNavigate();

  const favoritesChecker = (id) => {
    return favorites.some((book) => book.id === id);
  }


  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get(API_URL)
      .then(res => {
        console.log(res.data);
        setBooks(res.data);

      
        const distinctCategories = Array.from(new Set(res.data.map(book => book.category.name)));
        setCategories(distinctCategories);
      })
      .catch(err => console.log(err));
  }, []);

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

 
  const filteredBooks = selectedCategory
    ? books.filter(book => book.category.name === selectedCategory)
    : books;

  return (
    <div>
      
      <select  className='sel'  value={selectedCategory} onChange={handleCategoryChange}>
        <option value="">Select a category</option>
        {categories.map((category, index) => (
          <option key={index} value={category}>{category}</option>
        ))}
      </select>

      <div className="book-list">
        {filteredBooks.map((book) => (
          <div key={book.id} className="book">
            <div><h3>{book.title}</h3></div>
            <div className="imgs">
              <img
                src={book.cover_picture}
                alt="#"
                onClick={() => navigate(`/books/${book.id}`, { state: { book } })}
              />
            </div>
            <div>
              {favoritesChecker(book.id) ?
                <button onClick={() => removeFromFavorites(book)}>
                  Remove From Favorites
                </button>
                :
                <button onClick={() => addToFavorites(book)}>
                  Add to Favorites
                </button>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookList;
