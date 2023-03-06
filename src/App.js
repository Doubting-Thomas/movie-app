import "./App.css";
import { useState } from "react";
import MovieData from "./components/MovieData";

function App() {
  const [movie, getMovie] = useState([]);

  async function displayMovie() {
    const res = await fetch("https://swapi.dev/api/films/");
    const data = await res.json();
    console.log(data);

    const movieValues = data.results.map((movieValue) => {
      return {
        id: movieValue.episode_id,
        title: movieValue.title,
        director: movieValue.director,
        producer: movieValue.producer,
        description: movieValue.opening_crawl,
      };
    });
    // console.log(getMovie);
    // console.log(movieValues);
    // getMovie(movieValues);
    //console.log(getMovie(movieValues[0]));
  }
  // function check() {
  //   console.log(7);
  // }
  //console.log(check(6));

  return (
    <div>
      <div className="movie__heading">
        <h1>Movie App</h1>
        <p>Click the button below to display movies.</p>
      </div>
      <section>
        <button onClick={displayMovie}>Generate Movie</button>
      </section>
      <section>
        <MovieData movies={movie} />
      </section>
    </div>
  );
}
export default App;
