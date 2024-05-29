
import { useEffect, useState } from 'react';
import './App.css';
import SearchIcon from './search.svg'
import MovieCard from './MovieCard';


const API_URL = "http://www.omdbapi.com/?i=tt3896198&apikey=7288b149" ;

const movie1={
    "Title": "Superman III",
    "Year": "1983",
    "imdbID": "tt0086393",
    "Type": "movie",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMzI3ZDllMTctNmI2Mi00OGQ4LTk2ZTQtYTJhMjA5ZGI2YmRkXkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_SX300.jpg"
}


function App() {
  const [movies,SetMovies] = useState([]);
  const[movie,changeMovie] = useState("");
 
  const searchMovies = async(title) =>{
    const response = await fetch(`${API_URL}&s=${title}`);
    const data= await response.json();

    SetMovies(data.Search);
  }
 
  const search=()=>{
    searchMovies(movie);
  }

  const setMovie = (mov) =>{
    changeMovie(mov.target.value)
  }
  return (
    <div className="app">
      <h1>Movie Land</h1>
      <div className='search'>
        <input 
        placeholder='Search for movies...'
        value={movie}
        onChange={setMovie}
        />
        <img src={SearchIcon}
         alt='search'
         onClick={search}/>
      </div>
      {
        (movies.length > 0 )
        ?
        (
          <div className='container'>
            {
              movies.map((movie)=>{
                return(
                  <MovieCard movie={movie}/>
                )
              })
            }
          </div>
        ) :
        (
          <div className='empty'>
            <h2>No movies Found</h2>
          </div>
        )
      }
      
    </div>
  );
}

export default App;
