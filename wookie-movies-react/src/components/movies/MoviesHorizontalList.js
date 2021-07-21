import React from 'react';
import Carousel from 'react-elastic-carousel'
import MovieThumbnail from './MovieThumbnail';
import './MoviesHorizontalList.css';


const MoviesHorizontalList = (props) => {

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2},
    { width: 850, itemsToShow: 3 },
    { width: 1150, itemsToShow: 4, itemsToScroll: 2 },
  ]

  const moviesInGenre = props.movies.filter(movie => movie.genres.includes(props.genreName));
  return (
      <div className="horizontalList container">
        <h2 className="horizontalList__title">{props.genreName}</h2>
        <Carousel itemsToShow={3} itemPadding={[10, 50]} breakPoints={breakPoints} disableArrowsOnEnd={false} showEmptySlots className="horizontalList__wrapper">
          {moviesInGenre.map(movie => (
            <MovieThumbnail key={movie.id} movie={movie}/>
            ))}
        </Carousel>
      </div>
  )
}

export default MoviesHorizontalList
