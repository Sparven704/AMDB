import React from "react";
import { Link } from "react-router-dom";

import './NavBar.css';

function NavBar() {
    return (
        <nav className='navbar'>
            <div className="nav-items">
                <div className="logo">AMDB</div>
                <ul className="nav-list">
                    <li><Link to="/"> Home</Link></li>
                    <li><Link to='/topmovies'>TopMovies</Link></li>
                </ul>      
            </div>
        </nav>
    )
}


export default NavBar