import "./movies.css";
import { useSelector } from "react-redux";

function Movies() {
  const movies = useSelector((state) => state.movies);
  console.log(movies.title);
  return (
    <div>
      <h1>Pupuler Movies</h1>
      <h3>{movies.title}</h3>
    </div>
  );
}

export default Movies;
