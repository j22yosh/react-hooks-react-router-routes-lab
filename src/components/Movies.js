import React from "react";
import { movies } from "../data";

function Movies() {
  return <div>
    <h1>Movies Page</h1>
    {
        movies.map(function(movie){
          // returns Nathan, then John, then Jane
          return <div> {movie.title}{movie.time} </div>
        })
      }
  </div>;
}

export default Movies;
