import { useState, useEffect } from 'react';
import * as axios from 'axios';
import Header from './components/UI/Header';
import MoviesList from './components/movies/MoviesList';

const App = () => {

  axios.defaults.headers.common['Authorization'] = 'Bearer Wookie2019';
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let genres = [];

  useEffect(() => {
    const fetchData = async () => {
      await axios.get('https://wookie.codesubmit.io/movies')
        .then(res => {
          setItems(res.data);
          setIsLoading(false)
        });
    }
    fetchData();
  }, []);

  const movieGenres = () => {
    if(!isLoading) {
      items.movies.forEach(movie => {
        genres = [].concat(genres, movie.genres)
      });
      genres = genres.filter((genre, index, self) => index === self.indexOf(genre)) 
    }
    console.log(genres)
  }
  movieGenres();
  return (
    <div>
      <Header />
      <MoviesList isLoading={isLoading} genres={genres} movies={items.movies}/>
    </div>
  );
}


export default App;