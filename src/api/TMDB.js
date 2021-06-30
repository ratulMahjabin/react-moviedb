import axios from "axios";

const TMDB = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
});

const getMoviesByTerm = (SearchTerm, setMovies) => {
  TMDB.get("/search/movie", {
    params: {
      api_key: "05e14f3ad15d9d93286e2e178f40e3cc",
      query: SearchTerm,
    },
  }).then((response) => {
    setMovies(response.data);
  });
};

export { getMoviesByTerm };
