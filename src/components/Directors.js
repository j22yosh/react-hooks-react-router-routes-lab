import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    
    <h1>Directors Page</h1>
    {
    directors.map(function(director){
      // returns Nathan, then John, then Jane
      return <div>Name: {director.name}
      <ul>Movies
        {director.movies}</ul>
      
      </div>
    })
  }</div>;
}

export default Directors;
