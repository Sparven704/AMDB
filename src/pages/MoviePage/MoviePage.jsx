import React from "react";
import axios from "axios";
import { useEffect, useState } from 'react';


import { MovieCard } from '../../components/MovieCard/MovieCard'
import { TMDB_GET_MOVIES } from "../../constants";


function MoviePage() {

    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
    try{
      const { data } = await axios.get(TMDB_GET_MOVIES);
      console.log(data.results)
      setMovies(data.results)
    }catch(err){
      console.log(err);
    }
  }
  useEffect(() => {
    getMovies();
  },[])
    return (
        <>
            {movies && movies.length > 0 && movies.map(movie => <MovieCard key={movie.id} movie={movie} />)}
        </>
    )
}

export default MoviePage


