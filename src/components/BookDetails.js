import React from "react";
import "../App.css";
import { useLocation, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { API_URL } from '../API';
// <<<<<<<>>>>></>
const BookDetails = () => {
    const { id } = useParams;
    const location = useLocation();
    
    const [book, setBook] = useState({});

    useEffect(() => {
        axios.get(`${API_URL}/${location.state?.book?.id}`)
            .then(res => {
                console.log(res.data);
                setBook(res.data);
            })
            .catch(err => {
                console.log(err)
                setBook(location.state?.book);
            });
    }, [id]);

    return (
        <div className="book-details" >

            <div><h2>
                {book?.title}
            </h2>
                <img className='imgs' src={book?.cover_picture} alt="#" />
            </div>

            <div>
                <h2>Descreption</h2>
                <p>description : <hr /> {book?.description}</p>
                <p> auther name  : <hr /> {book?.author?.name}</p>
                <p> prices: <hr />{book?.price}</p>
            </div>
        </div>
    )
}
export default BookDetails;