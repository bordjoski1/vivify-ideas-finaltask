import React, { useEffect, useState } from 'react';

import MovieList from './MovieList';
import MovieService from '../../services/MovieService';

const Movies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    setMovies(MovieService.getMovies());
  }, []);

  function removeMovie(id) {
    let tempMovies = [...movies];
    for(let i = 0; i < tempMovies.length; i++)
    {
      if(tempMovies[i].id == id) tempMovies.splice(id,1);
    }
    setMovies(tempMovies)  
  }
  return (
    <div className="container-fluid" style={{ marginLeft: '-15px' }}>
      <div className="d-flex flex-row">
        <div className="col-sm-12">
          <MovieList movies={movies} 
          setMovies={setMovies}
          removeMovie={removeMovie}/>
        </div>
      </div>
    </div>
  );
}

export default Movies;
