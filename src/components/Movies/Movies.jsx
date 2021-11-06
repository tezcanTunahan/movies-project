import "./movies.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard/MovieCard";

function Movies() {
  const movies = useSelector((state) => state.movies.results);
  const [movieArr, setMovieArr] = useState([]);
  useEffect(() => {
    setMovieArr(movies);
  }, [movies]);
  return (
    <div>
      <h2 className="categoryName">Popular Movies</h2>
      {
        <div className="moviesOutside__container">
          {movieArr
            ? movieArr.map((movie) => (
                <MovieCard movie={movie} key={movie.id} />
              ))
            : "no item"}
        </div>
      }
    </div>
  );
}

export default Movies;
