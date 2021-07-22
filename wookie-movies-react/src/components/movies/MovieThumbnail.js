import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './MovieThumbnail.css';

const MovieThumbnail = ({movie}) => {

  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <div className="thumbnail" onMouseEnter={() => setShowOverlay(true)} onMouseLeave={() => setShowOverlay(false)}>
      <Link to={`/${movie.slug}`}>
        <img className="thumbnail__image" src={movie.backdrop} alt={movie.title} />
        {showOverlay && 
        <div className="thumbnail__overlay">
          <h3 className="overlay__title">
            {movie.title}
          </h3>
        </div>}
      </Link>
    </div>
  )
}

export default MovieThumbnail
