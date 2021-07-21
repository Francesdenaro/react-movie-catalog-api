import React from 'react';
import './MovieDetail.css';

const MovieDetail = ({ movie }) => {
  return (
    <div className="movieDetail container">
      <div className="movieDetail__image">
        <img src={movie.poster} />
      </div>
      <div className="movieDetail__details">
        <h2>{movie.title}</h2>
      </div>
    </div>
  )
}

export default MovieDetail
