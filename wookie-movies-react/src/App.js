import { useState, useEffect } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import axios from 'axios';

import Home from './Pages/Home';
import Movie from './Pages/Movie';
import Header from './components/UI/Header';

import './App.css';
import NotFound from './Pages/NotFound';

const App = () => {

  axios.defaults.headers.common['Authorization'] = 'Bearer Wookie2019';
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      await axios.get(`https://wookie.codesubmit.io/movies?q=${query}`)
        .then(res => {
          setItems(res.data);
          setIsLoading(false)
        })
    }
    fetchData();
  }, [query]);

  const movieGenres = () => {
    let genres = [];
    if (!isLoading) {
      items.movies.forEach(movie => {
        genres = [].concat(genres, movie.genres)
      });
      return genres = genres.filter((genre, index, self) => index === self.indexOf(genre))
    }
  }

  return (
    <div className="appWrapper">
      <Router>
        <Header getQuery={(q) => setQuery(q)} />
        <Switch>
          <Route path='/' exact >
            <Home isLoading={isLoading} movieGenres={movieGenres()} items={items.movies} />
          </Route>
          {!isLoading && items.movies.map(movie => (
            <Route key={movie.id} path={`/${movie.slug}`}>
              <Movie movie={movie}/>
            </Route>
          ))}
          <Route component={NotFound}/>
        </Switch>
      </Router>
    </div>
  );
}


export default App;