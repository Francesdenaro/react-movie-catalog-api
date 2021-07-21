import React from 'react';
import { Link } from 'react-router-dom';
import './MovieDetail.css';

const MovieDetail = ({ movie }) => {
  const releaseDate = new Date(movie.released_on);

  return (
    <div className="movieDetail container">
      <div className="movieDetail__image">
        <img src={movie.poster} />
      </div>
      <div className="movieDetail__details">
        <div className="details__header">
          <h2 className="header__title">{movie.title} (Rating: {movie.imdb_rating})</h2>
          <div className="header__header"></div>

        </div>
        <div className="details__meta">
          {releaseDate.getFullYear()} | {movie.length} | {movie.director}
        </div>
        <div className="details__cast">
          Cast: {movie.cast.map((actor, index) => (
            actor + (index < (movie.cast.length - 1) ? ', ' : ''))
          )
          }
        </div>
        <div className="details__description">
          {movie.overview}
        </div>
        <Link to='/'>
          <button className="btn details__button">Back to the list</button>
        </Link> 
      </div>
    </div>
  )
}

export default MovieDetail
