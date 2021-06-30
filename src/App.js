import react, { useState } from "react";
import Navbar from "./components/Navbar";
import { getMoviesByTerm } from "./api/TMDB";
import SearchBar from "./components/SearchBar";

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
      <Navbar />
      <SearchBar handleChange={handleChange} handleSubmit ={handleSubmit} />
    </div>
  );
};

export default App;
