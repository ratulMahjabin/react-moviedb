import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter, Link, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import Navbar from "./components/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <div>
        <Route path="/" exact={true} component={App} />
        <Route path="/movie/:id" exact component={MovieDetails} />
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
