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
      <div className="detail__left">
        <img
          className="left__img"
          src={
            movie
              ? `https://image.tmdb.org/t/p/w342/${movie.backdrop_path}`
              : "https://cdn.pixabay.com/photo/2020/08/27/13/11/loading-bar-5522019_960_720.png"
          }
        />
      </div>
      <div className="detail__right">
        <img
          className="poster__img"
          src={
            movie
              ? `https://image.tmdb.org/t/p/w342/${movie.poster_path}`
              : "https://cdn.pixabay.com/photo/2020/08/27/13/11/loading-bar-5522019_960_720.png"
          }
        />
        <p className="detail__movie__title">
          {movie ? movie.title : "cant matched movie"}
        </p>
        <p> {movie ? movie.overview : "cant matched movie"}</p>
        <p>
          {" "}
          Released date: {movie ? movie.release_date : "cant matched movie"}
        </p>
        <p>
          Average score: {movie ? movie.vote_average : "cant matched movie"} /10
        </p>
      </div>
    </div>
  );
}

export default Detail;
