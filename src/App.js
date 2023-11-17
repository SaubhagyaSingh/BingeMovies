import "./App.css";
import { useEffect, useState } from "react";
import sIcon from "./sIcon.svg";
import MovieCard from "./Moviecard";

//8eab2295

const api_url = "http://www.omdbapi.com/?i=tt3896198&apikey=8eab2295";

const movie1 = {
  Title: "Amazing Spiderman Syndrome",
  Year: "2012",
  imdbID: "tt2586634",
  Type: "movie",
  Poster: "N/A",
};

const App = () => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const searchMovies = async (title) => {
    const response = await fetch(`${api_url}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies("spiderman");
  }, []);

  return (
    <div className="app">
      <h1>Binge Movies</h1>
      <div className="search">
        <input
          placeholder="search for Movies here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <img
          src={sIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        ></img>
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie}></MovieCard>
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2> No Movies Found</h2>
        </div>
      )}
    </div>
  );
};

export default App;
