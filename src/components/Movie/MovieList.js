import React from 'react';
import PropTypes from 'prop-types';

import MovieCard from './MovieCard';
import AddMovies from './AddMovie';

const getMovies = movies => (
    <div className="card-deck">
    {movies.map(movie => (
      <MovieCard key={movie.id} movie={movie} />
    ))}
  </div>
);

const MovieList = ({ movies, setMovies }) =>{
  return (
    <div>
      {getMovies(movies)}
      <AddMovies movies={movies}
      setMovies={setMovies}/>
    </div>
  )
} ;

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.array,
};

export default MovieList;
