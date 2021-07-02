import react, { useState } from "react";

import { getMoviesByTerm } from "./api/TMDB";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await getMoviesByTerm(searchTerm, setMovies);
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <SearchBar handleChange={handleChange} handleSubmit={handleSubmit} />
      <MovieList movies={movies} />
    </div>
  );
};

export default App;
