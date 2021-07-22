import React from 'react';
import { Link } from 'react-router-dom';
import './MovieDetail.css';

const MovieDetail = ({ movie, getBookmark, bookmarks }) => {
  const releaseDate = new Date(movie.released_on);

  const bookmarkHandler = () => {
    getBookmark(movie);
  }

  return (
    <div className="movieDetail container">
      <div className="movieDetail__image">
        <img src={movie.poster} alt={`${movie.title} poster`}/>
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
          )}
        </div>
        <div className="details__description">
          {movie.overview}
        </div>
        <button 
          className={`btn details__bookmark mr-5 ${!bookmarks.includes(movie) ? '' : 'bookmarked'}`}
          onClick={bookmarkHandler}>
            {!bookmarks.includes(movie) ? 'Add to bookmarks' : 'Remove from bookmarks'}
        </button>
        <Link to='/'>
          <button className="btn details__backhome">Back to the list</button>
        </Link>
      </div>
    </div>
  )
}

export default MovieDetail
