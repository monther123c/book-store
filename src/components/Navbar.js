import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

const Navbar =() => {
    return(
        <div className="navbar">
        <div>
        <h4>   Home Page</h4> 
         </div>
        <div> <Link to='/favorites'><h4>Your  Favorites List</h4></Link> </div>
        <div> Change  Language </div>

        </div>
    )
}
export default Navbar;