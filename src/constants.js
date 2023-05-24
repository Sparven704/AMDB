const TMDB_API_KEY = "0ef213470193edbb5434dfeabe288733";
export const POSTER_PREFIX = "https://image.tmdb.org/t/p/original";
export const TMDB_GET_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=${TMDB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&with_watch_monetization_types=flatrate`;
export const TMDBGetDetailById = (movieId) =>
  `https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}&language=en-US`;
