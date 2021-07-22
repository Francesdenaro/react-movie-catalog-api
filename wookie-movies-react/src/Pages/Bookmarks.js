import React from 'react'
import BookmarkedMovie from '../components/movies/BookmarkedMovie';

const Bookmarks = ({isLoading, bookmarks}) => {
  return <BookmarkedMovie isLoading={isLoading} bookmarks={bookmarks} />
}

export default Bookmarks
