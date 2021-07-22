import React from 'react'
import MovieDetail from '../components/movies/MovieDetail'

const Movie = ({movie, getBookmark, bookmarks}) => {
  const getBookmarkHandler = (bookmarkedMovie) => {
    getBookmark(bookmarkedMovie);
  }

  return <MovieDetail movie={movie} bookmarks={bookmarks} getBookmark={getBookmarkHandler}/>
}

export default Movie
