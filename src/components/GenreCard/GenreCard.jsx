import * as React from 'react';
import { Link } from 'react-router-dom';


import './GenreCard.css';


export const GenreCard = ({userGenre}) => {
    
    const {name} = userGenre;
    return (
        <div className="genre-card-container">
            <div className="genre-card-body">
                <h2 className="genre-name">{name}</h2>
            </div>
            <Link to="/usermovies">
                <button className="genre-card-btn">View Profile</button>
            </Link>
        </div>
    )
}