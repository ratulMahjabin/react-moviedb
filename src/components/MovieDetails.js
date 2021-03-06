import React from "react";
import { useState, useEffect } from "react";
import { getMovieDetails } from "../api/TMDB";
import { Link } from "react-router-dom";
const MovieDetails = (props) => {
  const [currentMovie, setCurrentMovie] = useState({});

  useEffect(() => {
    getMovieDetails(props.location.movie_id, setCurrentMovie);
  }, []);

  const ImageURL = "https://image.tmdb.org/t/p/w500/" + props.data.poster_path;
  return (
    <div class="col s12 m4">
      <div class="card">
        <div class="card-image">
          {props.data.poster_path == null ? (
            <img
              src="https://picsum.photos/200/300"
              alt=""
              style={{ width: "100", height: "200" }}
            />
          ) : (
            <img
              src={ImageURL}
              alt=""
              style={{ width: "100", height: "200" }}
            />
          )}

          <span class="card-title">{props.data.title}</span>
        </div>
        <div class="card-content">{props.data.release_date}</div>
        <div class="card-action">
          <Link
            to={{
              pathname: "/movie/" + props.data.id,
              movie_id: props.data.id,
            }}
          >
            See Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
