import * as React from 'react';
import axios from 'axios';


import './MovieCard.css';


export const MovieCard = ({movie}) => {
    
    const {title, vote_average, genre_ids, release_date, poster_path} = movie;

    const MOVIE_POSTER = "https://image.tmdb.org/t/p/original" + poster_path;
    console.log(MOVIE_POSTER)
    return (
        <div className="card-container">
            <div className="card-img-container">
                <img className="card-img" src={MOVIE_POSTER} alt="movie-card" />
            </div>
            <div className="card-details">
                <div>
                    <span className="title">{title}</span>
                </div>
                <div>
                    <span className="genre">Genre_ids: {genre_ids[0]}, {genre_ids[1]}, {genre_ids[2]},{genre_ids[3]},{genre_ids[4]} </span>
                </div>
                <div className="ratings">
                    <span>Rating: {vote_average}</span>
                    <span>{release_date}</span>
                </div>
            </div>
        </div>
    )
}
