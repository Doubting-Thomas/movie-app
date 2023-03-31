import React from "react";
import MovieList from "./Movie";
import classes from "./MovieData.module.css";

const MovieData = () => {
  return (
    <ul className={classes.movie}>
      {props.movies.map((movie) => (
        <MovieList
          key={movie.id}
          title={movie.title}
          director={movie.director}
          producer={movie.producer}
          description={movie.description}
        />
      ))}
    </ul>
  );
};
export default MovieData;
