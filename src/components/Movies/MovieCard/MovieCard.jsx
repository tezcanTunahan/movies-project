import "./movieCard.css";
import { Link, useHistory, useLocation } from "react-router-dom";

function MovieCard(props) {
  console.log(props.movie);
  return (
    <div className="movieCard__container">
      <img
        className="card__img"
        src={`https://image.tmdb.org/t/p/w342/${props.movie.backdrop_path}`}
        // I can use post_path to
      />
      <div>{<p className="movie__title">{props.movie.title}</p>}</div>
      <div>{<p>{props.movie.release_date}</p>}</div>
      <div>{<p>{props.movie.vote_average}</p>}</div>
    </div>
  );
}

export default MovieCard;
