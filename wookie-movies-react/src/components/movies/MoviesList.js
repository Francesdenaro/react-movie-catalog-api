import React from 'react';
import Spinner from '../UI/Spinner';
import MoviesHorizontalList from './MoviesHorizontalList';
import './MoviesList.css';

const MoviesList = (props) => {
  return props.isLoading ? (<Spinner/>) : (
    <section className="moviesList">
      {props.genres.map(genre => (
        <MoviesHorizontalList key={genre} genreName={genre} movies={props.movies} />
      ))}
    </section>)
}

export default MoviesList
