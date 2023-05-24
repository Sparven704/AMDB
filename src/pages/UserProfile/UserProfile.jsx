import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

import './UserProfile.css'

const UserProfile = () => {
  const { state } = useLocation();
  const user = state?.user; // Use optional chaining to handle null/undefined case

  const [likedGenres, setLikedGenres] = useState([]);
  const [linkedMovies, setLinkedMovies] = useState([]);


  useEffect(() => {
    if (user) {
      const fetchLikedGenres = async () => {
        try {
          const response = await axios.get(`https://localhost:7083/api/Genre/${user.name}`);
          setLikedGenres(response.data);
          console.log(response.data)
        } catch (error) {
          console.error(error);
        }
      };

      fetchLikedGenres();
    }
  }, [user]);

  useEffect(() => {
    if (user) {
      const fetchLinkedMovies = async () => {
        try {
          const response = await axios.get(`https://localhost:7083/api/Movie/${user.name}`);
          setLinkedMovies(response.data);
          console.log(response.data)
        } catch (error) {
          console.error(error);
        }
      };

      fetchLinkedMovies();
    }
  }, [user]);

  const [newGenre, setNewGenre] = useState({
    personName: '',
    genreName: ''
  });
  
  const handleGenreChange = (event) => {
    setNewGenre({ ...newGenre, [event.target.name]: event.target.value });
  };
  
  const handleGenreSubmit = (event) => {
    event.preventDefault();
    // Send the request to link the new genre
    linkNewGenre();
  };
  
  const linkNewGenre = async () => {
  try {
    const genreData = {
      personName: user.name,
      genreName: newGenre.genreName
    };
    
    const response = await axios.post('https://localhost:7083/api/PersonGenre', genreData);
    console.log(response.data);
    // Reset the form after successful submission
    setNewGenre({
      genreName: ''
    });
  } catch (error) {
    console.error(error);
  }
};

const [newMovie, setNewMovie] = useState({
    name: '',
    link: '',
    genreName: '',
    personName: user?.name
  });

const handleMovieChange = (event) => {
    setNewMovie({ ...newMovie, [event.target.name]: event.target.value });
  };

  const handleMovieSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://localhost:7083/api/Movie', newMovie);
      console.log(response.data);
      // Reset the form after successful submission
      setNewMovie({
        name: '',
        link: '',
        genreName: '',
        personName: user?.name
      });
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) {
    return <div>No user information available</div>;
  }
  return (
    <div className='userprofile-container'>
      <h1>User Profile: {user.name}</h1>
      <div className="genres">
        {likedGenres.length > 0 ? (
            <div>
            <h2>Liked Genres:</h2>
            <ul>
                {likedGenres.map((genre, index) => (
                <li key={index}>{genre}</li>
                ))}
            </ul>
            </div>
            ) : (
            <p>Loading...</p>
        )}
        {/* Form for linking new genre to the user */}
        <div className='genre-form'>
          <h2>Link New Genre:</h2>
          <form onSubmit={handleGenreSubmit}>
            <label>
                <span className="genre-label">Genre Name:</span>
                <input
                    type="text"
                    name="genreName"
                    value={newGenre.genreName}
                    onChange={handleGenreChange}
                    required
                />
            </label>
            <button type="submit">Link Genre</button>
          </form>
        </div>
        
      </div>
      <div className="movies">
            {linkedMovies.length > 0 ? (
            <div>
            <h2>Linked Movies:</h2>
            <ul>
                {linkedMovies.map((movie, index) => (
                <li key={index}>Movie name: {movie.name} 
                <br />       
               <span className="rating">
                    rating:
                    <Box key={index}>
                      {Array.from({ length: movie.rating/2 }, (_, index) => (
                        <StarIcon key={index} />
                      ))}
                      {Array.from({ length: 5 - movie.rating }, (_, index) => (
                        <StarBorderIcon key={index} />
                      ))}
                    </Box>
                  </span>
                  <br />
                TMDB link: {movie.link}</li>
                ))}    
            </ul>
            </div>
            ) : (
            <p>Loading...</p>
            )}
            {/* Form for adding a new movie */}
        <div className='movie-form'>
          <h2>Add New Movie:</h2>
          <form onSubmit={handleMovieSubmit}>
            <label>
              <span className="movie-label">Movie Name:</span>
              <input
                type="text"
                name="name"
                value={newMovie.name}
                onChange={handleMovieChange}
                required
              />
            </label>
            <br />
            <label>
              <span className="movie-label">TMDB Link:</span>
              <input
                type="text"
                name="link"
                value={newMovie.link}
                onChange={handleMovieChange}
                required
              />
            </label>
            <br />
            <label>
              <span className="movie-label">Genre Name:</span>
              <input
                type="text"
                name="genreName"
                value={newMovie.genreName}
                onChange={handleMovieChange}
                required
              />
            </label>
            <br />
            <button type="submit">Add Movie</button>
          </form>
      </div>
    </div>
    </div>
  );
};

export default UserProfile;