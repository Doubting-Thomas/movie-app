import React from "react";
import classes from "./Movie.module.css";

const MovieList = (props) => {
  return (
    <li className={classes.movie}>
      <h2>{props.title}</h2>
      <h3>{props.director}</h3>
      <h3>{props.producer}</h3>
      <p>{props.description}</p>
    </li>
  );
};

export default MovieList/;
