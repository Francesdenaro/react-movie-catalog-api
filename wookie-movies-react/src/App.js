import { useState, useEffect } from 'react';
import * as axios from 'axios';


const App = () => {

  axios.defaults.headers.common['Authorization'] = 'Bearer Wookie2019';
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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


  return (
    <div className='container'>
      <ul>
        {!isLoading && items.movies.map(movie => <li key={movie.id}>{movie.title}</li>)}
      </ul>
    </div>
  );
}


export default App;