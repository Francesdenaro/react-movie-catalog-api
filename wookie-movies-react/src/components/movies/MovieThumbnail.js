import React from 'react';
import './MovieThumbnail.css';

const MovieThumbnail = ({movie}) => {
  return (
    <div>
      <img className="thumbnail" src={movie.backdrop} alt={movie.title} />
    </div>
  )
}

export default MovieThumbnail
