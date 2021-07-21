import React from 'react'
import MoviesList from '../components/movies/MoviesList';

const Home = ({isLoading, movieGenres, items}) => {

  return (
    <div>
      <MoviesList isLoading={isLoading} genres={movieGenres} movies={items} />
    </div>
  )
}

export default Home
