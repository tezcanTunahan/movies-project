import "./detail.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

function Detail() {
  const movies = useSelector((movies) => movies.movies.results);
  const { movieId } = useParams();
  const [movie, setMovie] = useState();

  useEffect(() => {
    setMovie(movies[movieId]);
  }, [movieId, movies]);

  return (
    <div className="detail__container">
      {movie ? movie.title : "cant matched movie"}
    </div>
  );
}

export default Detail;
