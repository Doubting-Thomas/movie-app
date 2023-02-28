import "./App.css";
import { useState } from "react";
import MovieData from "./components/MovieData";

function App() {
  const [movie, getMovie] = useState([]);

  async function displayMovie() {
    const res = await fetch("https://swapi.dev/api/films/");
    const data = await res.json();

    const movieValues = data.results.map((movieValue) => {
      return {
        id: movieValue.episode_id,
        title: movieValue.title,
        director: movieValue.director,
        producer: movieValue.producer,
        description: movieValue.opening_crawl,
      };
    });
  }

  return (
    <div>
      <h1>Movie App</h1>
      <p>This displays specific movies dynamically from an API.</p>
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
