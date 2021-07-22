import React from 'react';
import './BookmarkedMovie.css';

import MovieThumbnail from './MovieThumbnail';

const BookmarkedMovie = ({isLoading, bookmarks}) => {
  console.log(bookmarks)
  if(isLoading) {
    return <div></div>;
  }

  return (
    <div className="container bookmarks">
      {bookmarks.map(movie => (
        <MovieThumbnail key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default BookmarkedMovie
