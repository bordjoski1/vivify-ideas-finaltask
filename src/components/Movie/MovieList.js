import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';
import AddMovies from './AddMovie';

const getMovies = (movies,removeMovie) => (
    <div className="card-deck">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie}
      removeMovie={removeMovie}/>
    ))}
  </div>
);

const MovieList = ({ movies, setMovies,removeMovie }) =>{
  return (
    <div>
      {getMovies(movies,removeMovie)}
      <AddMovies movies={movies}
      setMovies={setMovies}/>
    </div>
  )
} ;

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.array
};

export default MovieList;
