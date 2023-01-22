import React from "react";
import { directors } from "../data";

function Directors() {
  return (
    <>
      <h1>Directors Page</h1>
      {directors.map((director, ind) => {
        return (
          <div key={ind}>
            <h3>Name: {director.name}</h3>
            <p>Movies:</p>
            <ul>
              {director.movies.map((movie, ind) => {
                return <li key={ind}>{movie}</li>
              })}
            </ul>
          </div>
        )
      })
      }
    </>)
}

export default Directors;
